import { Injectable, Logger } from '@nestjs/common';
import { Queue, Worker, Job } from 'bullmq';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { MqService } from '../../../mq/mq.service';
import { WebPushService, NotificationPayload } from '../../../web-push/web-push.service';
import { PublicationStatus, PublicationUpdateInput } from '../../../graphql/graphql.schema';
import { Publication } from './model/publication';
import htmlToText from 'html-to-text';

@Injectable()
export class PublicationService {
  private readonly queue: Queue;
  private readonly worker: Worker;
  private readonly logger = new Logger(PublicationService.name);

  constructor (private readonly prisma: PrismaService, private readonly webPush: WebPushService, mq: MqService) {
    const queueBaseOpts = {
      prefix: PublicationService.name.toLowerCase()
    };
    this.queue = mq.createQueue('notification', {
      ...queueBaseOpts,
      defaultJobOptions: {
        removeOnComplete: 100
      }
    }, queueBaseOpts);
    this.worker = mq.createWorker('notification', this.sendNotification.bind(this), {
      ...queueBaseOpts,
      limiter: {
        max: 1000,
        duration: 5000,
      }
    });
    this.worker.on('failed', this.onFailedJob.bind(this));
    this.worker.on('completed', this.onSuccessfulJob.bind(this));
  }

  private async sendNotification (job: Job): Promise<boolean> {
    const p1 = await this.prisma.query.bpsConnection({
      where: {
        customerOf_some: {
          promotions_some: {
            uid: job.data.uid
          }
        }
      }
    }, '{ edges { node { uid } } }');
    const p2 = await this.prisma.query.promotion({
      where: {
        uid: job.data.promoUid
      }
    }, '{ content, name }');

    const [{edges}, {content, name}] = await Promise.all([p1, p2]);
    const payload: NotificationPayload = {
      title: name,
      body:  htmlToText.fromString(content, {preserveNewlines: true}),
      data: {
        type: 'promotion',
        uid: job.data.promoUid
      }
    };

    const result = await this.webPush.broadcastNotification(edges.map(e => e.node.uid), JSON.stringify(payload));
    if (!result) {
      this.logger.error(`No subscriptions to deliver the publication ${job.data.uid}`);
    }
    return result;
  }

  private async updatePublication(uid: string, data: PublicationUpdateInput): Promise<void> {
    try {
      await this.prisma.mutation.updatePublication({
        where: {
          uid
        },
        data
      });
    } catch (error) {
      this.logger.error(`Publication ${uid} cannot be updated: ${error.message}`);
    }
  }

  private onFailedJob(job: Job, error: Error): void {
    this.logger.error(`Publication ${job.data.publication.uid} could not be delivered: ${error.message}`);
    this.updatePublication(job.data.publication.uid, {
      status: PublicationStatus.FAILED,
      updatedBy: `system_job:${job.id}`
    });
  }

  private onSuccessfulJob(job: Job): void {
    this.logger.log(`Publication ${job.data.publication.uid} succesfully delivered`);
    this.updatePublication(job.data.publication.uid, {
      status: PublicationStatus.DELIVERED,
      updatedBy: `system_job:${job.id}`
    });
  }

  public broadcast(publication: Publication, promoUid: string): Promise<Job> {
    this.logger.log(`Publication ${publication.uid} added to the queue`);
    return this.queue.add(publication.uid,
      {
        publication,
        promoUid
      },
      {
        delay: publication.delay
      });
  }
}
