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
    // Bullmq has a strage behaviour, probably a bug:
    // After a process reboot, the delayed jobs previously queued, are not
    // processed by the QueueScheduler when the time comes.
    // Only after a new job is scheduled, the delayed ones,
    // get executed. We intentionally queue this dummy job to keep on
    // serving tasks.
    this.queue.add('boot', {}, { delay: 1000 });
  }

  private async sendNotification (job: Job): Promise<boolean> {
    if (Object.keys(job.data).length < 1) {
      return;
    }
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
    return this.webPush.broadcastNotification(edges.map(e => e.node.uid), JSON.stringify(payload));
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

  private onSuccessfulJob(job: Job, result: any): void {
    if (typeof result === 'undefined') {
      return; // Fail silently
    }
    if (result) {
      this.logger.log(`Publication ${job.data.publication.uid} succesfully delivered`);
    } else {
      this.logger.warn(`No subscriptions to deliver the publication ${job.data.publication.uid}`);
    }
    this.updatePublication(job.data.publication.uid, {
      status: PublicationStatus.DELIVERED,
      publishAt: new Date().toISOString(),
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
