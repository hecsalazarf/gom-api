import { Injectable, Logger } from '@nestjs/common';
import { Queue, Worker, QueueBaseOptions, Job } from 'bullmq';
import { WebPushError, SendResult, PushSubscription } from 'web-push';
import WebPush from 'web-push';
import { VapidDto } from './dto';
import { MqService } from '../mq/mq.service';
import { ConfigService } from '../config/config.service';
import { SubsRepository, Subscription } from './providers';

// Push Service Status
export enum PushServiceStatus {
  CREATED = 201,	// Created. The request to send a push message was received and accepted.
  INVALID = 400,	// Invalid request. This generally means one of your headers is invalid or improperly formatted.
  NOT_FOUND = 404, // Not Found. This is an indication that the subscription is expired and can't be used.
  GONE = 410, // Gone. The subscription is no longer valid and should be removed from application server.
  TOO_LARGE = 413,	// Payload size too large. The minimum size payload a push service must support is 4096 bytes (or 4kb).
  TOO_MANY_REQUESTS = 429, // Too many requests. The push service should include a 'Retry-After' header to indicate how long
  // before another request can be made.
}

export interface NotificationPayload {
  title: string; // notification title
  body: string; // notification body
  data: {
    type: string;
    uid: string;
    operation?: string;
  }; // notification data
}

@Injectable()
export class WebPushService {
  private readonly logger = new Logger(WebPushService.name);
  private worker: Worker;
  private queue: Queue;

  constructor(vapid: VapidDto, mq: MqService, private readonly subsRepo: SubsRepository) {
    this.initMqTasks(mq);
    WebPush.setVapidDetails(vapid.subject, vapid.publicKey, vapid.privateKey);
  }

  /**
   * Init tasks processor and queue
   * @param {MqService} mq Message Queue service
   */
  private initMqTasks(mq: MqService): void {
    const queueBaseOpts: QueueBaseOptions = {
      prefix: WebPushService.name.toLowerCase()
    };
    this.queue = mq.createQueue('tasks', {
      ...queueBaseOpts,
      defaultJobOptions: {
        removeOnComplete: 100
      }
    }, queueBaseOpts);
    this.worker = mq.createWorker('tasks', this.jobProcessor.bind(this), {
      ...queueBaseOpts,
      limiter: {
        max: 1000,
        duration: 5000,
      }
    });
    this.worker.on('failed', this.onFailedJob.bind(this));
  }

  /**
   * Listener for failed jobs. Print error on console
   * @param {Job} job The job that failed
   * @param {Error} error Error details
   */
  private onFailedJob(job: Job, error: Error): void {
    this.logger.error(`Job ${job.name}[${job.id}] failed: ${error.message}`);
  }

  /**
   * Handle errors after pushing notifications. If there are expired subscriptions, remove
   * them asynchronously.
   * @param {Array<SendResult | WebPushError>} responses Responses from Push Service
   * @param {string} userId User ID to send notification
   * @returns {number} Errors count
   */
  private async handleErrors(responses: Array<SendResult | WebPushError>, userId: string): Promise<number> {
    let errorCount = 0; // count errors in the responses
    const subsToRemove = responses.map(res => {
      if (res instanceof WebPushError) {
        errorCount++; // found error
        if (res.statusCode === PushServiceStatus.NOT_FOUND || res.statusCode === PushServiceStatus.GONE) {
          // return the subscription to be removed when not found or gone
          return res.endpoint;
        }
        // any other WebPushError, print it on log
        this.logger.warn(`Notification to ${res.endpoint} for user ${userId} was not sent. Status ${res.statusCode}`);
      } else if (res instanceof Error) {
        errorCount++; // found error
        // any other Error, print it on log
        this.logger.warn(`${res.message}. User ${userId}`);
      }
    }).filter(res => res); // filter undefined elements

    if (subsToRemove.length > 0) {
      // there are subscriptions to remove
      const subs = subsToRemove.map(endp => {
        const sub = new Subscription();
        sub.endpoint = endp;
        sub.user.id = userId;
        return sub;
      });
      try {
        await this.subsRepo.removeMany(subs);
      } catch (error) {
        // print error when execution went wrong
        this.logger.error(`Expired subscriptions of user ${userId} were not removed`);
        if (error.message) {
          this.logger.error(error.message);
        }
      }
    }
    return errorCount;
  }

  /**
   * Processor dispatcher of jobs
   * @param {Job} job The job being dispatched
   */
  private jobProcessor(job: Job): Promise<any> {
    if (this[job.name]) {
      return this[job.name](...job.data.args);
    }
    throw new Error(`No handler for job ${job.name}`);
  }

  /**
   * Send notification using the WebPush API
   * @param {Array<PushSubscription>} subscriptions Subscriptions array
   */
  private async sendNotification(subscriptions: Array<PushSubscription>, payload: string | Buffer): Promise<Array<SendResult | WebPushError>> {
    // send notification to subscriptions
    const promises = subscriptions.map(sub => WebPush.sendNotification(sub, payload));
    // wait until subscriptions are executed. Catch all errors
    return await Promise.all(promises.map(p => p.catch(e => e)));
  }

  /**
   * Push notification to a given user. The notification is sent to all user's subscriptions,
   * however, it's not guaranteed all subscriptions receive the message as some of them may
   * expire. The subscriptions with error will be displayed in the log
   * @param {string} user User ID to send notification
   * @param {string | Buffer} payload Notification payload
   * @returns {Promise<boolean>} Promise that resolves with 'true' when the notification was sent to at least one subscription,
   * or 'false' when no subscription is found. Promise rejects when all subscriptions returned with error from the Push Service
   */
  public async pushNotification(user: string, payload: string | Buffer): Promise<boolean> {
    if (user === '') {
      return false; // empty user, return false
    }
    const subscriptions = await this.subsRepo.fetchAllByUser(user);
    if (subscriptions.length === 0) {
      return false; // no subscriptions, return false
    }

    // send notification to subscriptions
    // wait until subscriptions are executed. Catch all errors
    const res = await this.sendNotification(subscriptions, payload);
    if (await this.handleErrors(res, user) === res.length) {
      // if all responses are errors, reject
      throw new Error(`Notification was not sent to ${user}. All subscriptions were invalid`); // TODO return error array
    }
    return true;
  }

  /**
   * Broadcast notification to a group of users. The notification is sent to all subscriptions,
   * however, it's not guaranteed all subscriptions receive the message as some of them may
   * expire. The subscriptions with error will be displayed in the log
   * @param {Array<string>} users User IDs to broadcast notification
   * @param {string | Buffer} payload Notification payload
   * @returns {Promise<boolean>} Promise that resolves with 'true' when the notification was sent to at least one subscription,
   * or 'false' when no subscription is found. Promise rejects when all subscriptions returned with error from the Push Service
   */
  public async broadcastNotification(users: Array<string>, payload: string | Buffer): Promise<boolean> {
    if (users.length === 0) {
      return false; // empty user, return false
    }
    const userSubs = await this.subsRepo.fetchAllByUsers(users);
    if (userSubs.size === 0) {
      return false;
    }
    const subs = Array.from(userSubs.values()).reduce((acc, curr) => {
      acc.push(...curr);
      return acc;
    }, []);
    const res = await this.sendNotification(subs, payload);
    // TODO Specify error for each user  because now the code does not
    // have the relationship error<->subscription per user
    if (await this.handleErrors(res, '#') === res.length) {
      // if all responses are errors, reject
      throw new Error('None message was delivered. All subscriptions were invalid'); // TODO return error array
    }
    return true;
  }


  /**
   * Add notification to queue
   * @param {string} user User ID to send notification
   * @param {string | Buffer} payload Notification payload
   * @returns {Promise<boolean>} Promise that resolves with 'true' when the notification was sent to at least one subscription,
   * or 'false' when no subscription is found. Promise rejects when all subscriptions returned with error from the Push Service
   */
  public queueNotification(user: string, payload: string | Buffer): Promise<Job> {
    return this.queue.add('pushNotification', { args: [user, payload] });
  }


  /**
   * Remove many subscriptions of a giver user
   * @param userId User ID
   * @param endpoints Array of endpoints to remove
   */
  public removeSubscriptions(userId: string, endpoints: string[]): Promise<boolean> {
    const subs = endpoints.map(endp => {
      const sub = new Subscription();
      sub.endpoint = endp;
      sub.user.id = userId;
      return sub;
    });
    return this.subsRepo.removeMany(subs);
  }


  /**
   * Add subcription to a given user
   * @param {string} userId User ID
   * @param {PushSubscription} subscription Subscription object
   */
  public addSubscription(userId: string, subscription: PushSubscription): Promise<boolean> {
    const subs = new Subscription();
    subs.user.id = userId;
    subs.endpoint = subscription.endpoint;
    subs.keys = subscription.keys;
    return this.subsRepo.save(subs);
  }
}

/**
   * Factory object required by Nestjs to instantiate WebPushService
   */
export const WebPushServiceFactory = {
  provide: WebPushService,
  useFactory: async (config: ConfigService, mq: MqService, subsRepo: SubsRepository): Promise<WebPushService> => {
    const vapid: VapidDto = await config.validate('web-push.vapid', VapidDto);
    return new WebPushService(vapid, mq, subsRepo);
  },
  inject: [ConfigService, MqService, SubsRepository],
};
