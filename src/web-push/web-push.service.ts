import { Injectable, Logger } from '@nestjs/common';
import * as WebPush from 'web-push';
import { PushSubscription, WebPushError, SendResult } from 'web-push';
import { ConfigService } from '../config/config.service';
import { RedisService, RedisArgs } from '../db/redis/redis.service';

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

@Injectable()
export class WebPushService {
  private readonly logger = new Logger(WebPushService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly redis: RedisService,
  ) {
    if (!config.has('vapid.subject') || !config.has('vapid.publicKey') || !config.get('vapid.privateKey')) {
      throw new Error(`${WebPushService.name} missing configuration`);
    }
    WebPush.setVapidDetails(config.get('vapid.subject'), config.get('vapid.publicKey'), config.get('vapid.privateKey'));
  }

  /**
   * Create redis hash input from subscription info
   * @param {PushSubscription} subscription Subscription info
   */
  private createSubData(subscription: PushSubscription): RedisArgs {
    const key = 'sub:' + subscription.endpoint;
    const data = [
      'p256dh',
      subscription.keys.p256dh,
      'auth',
      subscription.keys.auth,
    ];

    return {
      key,
      data,
    };
  }

  /**
   * Create redis set input that links user to subscription
   * @param {string} userId User id
   * @param {string} subscriptionId Subscription id
   */
  private createUserToSubData(userId: string, subscriptionId: string): RedisArgs {
    const key = `user:${userId}:subs`;
    const data = [
      subscriptionId,
    ];

    return {
      key,
      data,
    };
  }

  /**
   * Handle errors after pushing notifications. If there are expired subscriptions, remove
   * them asynchronously.
   * @param {Array<SendResult | WebPushError>} responses Responses from Push Service
   * @param {string} userId User ID to send notification
   * @returns {number} Errors count
   */
  private handleErrors(responses: Array<SendResult | WebPushError>, userId: string): number {
    let errorCount = 0; // count errors in the responses
    const subsToRemove = responses.map(res => {
      if (res instanceof WebPushError) {
        errorCount++; // found error
        if (res.statusCode === PushServiceStatus.NOT_FOUND || res.statusCode === PushServiceStatus.GONE) {
          // return the subscription to be removed when not found or gone
          return res.endpoint;
        }
        // any other WebPushError, print it on log
        this.logger.error(`Notification to ${res.endpoint} for user ${userId} was not sent. Status ${res.statusCode}`);
      } else if (res instanceof Error) {
        errorCount++; // found error
        // any other Error, print it on log
        this.logger.error(`${res.message}. User ${userId}`);
      }
    }).filter(res => res); // filter undefined elements

    if (subsToRemove.length > 0) {
      // if there are subscriptions to remove, queue them
      setImmediate(async () => await this.removeUserSubscriptions(userId, subsToRemove));
    }
    return errorCount;
  }

  /**
   * Get user subscriptions by user ID
   * @param {string} userId User ID
   */
  private async getUserSubscriptions(userId: string): Promise<PushSubscription[]> {
    const subscriptions: PushSubscription[] = []; // container of all subscriptions
    const subs: string[] = await this.redis.smembers(`user:${userId}:subs`); // get user subscriptions set
    if (subs.length === 0) {
      return subscriptions; // no subscriptions, return empty container
    }
    const pipeline = this.redis.pipeline(); // create a pipeline
    // add each subscription to the pipeline
    subs.map((sub, index) => pipeline.hgetall(`sub:${sub}`, (error, res) => {
      if (Object.keys(res).length === 0) {
        return; // if empty object, return
      }
      // create PushSubscription object
      subscriptions[index] = {
        endpoint: sub,
        keys: {
          auth: res.auth,
          p256dh: res.p256dh,
        },
      };
    }));

    await pipeline.exec(); // get subscription details in bulk

    return subscriptions;
  }

  /**
   * Remove user subscriptions
   * @param {string} userId User id
   * @param {PushSubscription} subscriptions Array of subscription IDs to remove
   */
  public async removeUserSubscriptions(userId: string, subscriptions: string[]): Promise<boolean> {
    const pipeline = this.redis.pipeline();
    subscriptions.map(sub => {
      // add operations to the pipeline
      pipeline.srem(`user:${userId}:subs`, sub); // remove subscription from user's subscriptions set
      pipeline.del(`sub:${sub}`); // remove the subscription
    });
    await pipeline.exec();

    return true;
  }

  /**
   * Store user subscription
   * @param {string} user User id
   * @param {PushSubscription} subscription Subscription info
   */
  public async addUserSubscription(user: string, subscription: PushSubscription): Promise<boolean> {
    const sub = this.createSubData(subscription);
    const userToSub = this.createUserToSubData(user, subscription.endpoint);

    await this.redis
      .multi()
      .hmset(sub.key, sub.data) // store subscription
      .sadd(userToSub.key, userToSub.data) // add subscription to user subscriptions set
      .exec();

    return true;
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
    const subscriptions = await this.getUserSubscriptions(user);
    if (subscriptions.length === 0) {
      return false; // no subscriptions, return false
    }

    // send notification to subscriptions
    const promises = subscriptions.map(sub => WebPush.sendNotification(sub, payload));
    // wait until subscriptions are executed. Catch all errors
    const res = await Promise.all(promises.map(p => p.catch(e => e)));
    if (this.handleErrors(res, user) === res.length) {
      // if all responses are errors, reject
      throw new Error('Notification could not be sent');
    }
    return true;
  }
}
