import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as WebPush from 'web-push';
import { PushSubscription } from 'web-push';
import { ConfigService } from '../config/config.service';
import { RedisService, RedisArgs } from '../db/redis/redis.service';

@Injectable()
export class WebPushService {
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
   * Store user subscription
   * @param {string} user User id
   * @param {PushSubscription} subscription Subscription info
   */
  public async addUserSubscription(user: string, subscription: PushSubscription): Promise<boolean> {
    const sub = this.createSubData(subscription);
    const userToSub = this.createUserToSubData(user, subscription.endpoint);

    const res: [] = await this.redis
      .multi()
      .hmset(sub.key, sub.data) // store subscription
      .sadd(userToSub.key, userToSub.data) // add subscription to user subscriptions set
      .exec();

    const errors = res.filter(r => r[0] !== null);
    if (errors.length > 0) {
      throw new InternalServerErrorException('Subscription could not be stored', 'webpush_subscribe');
    }

    return true;
  }

  /**
   * Remove user subscription
   * @param {string} user User id
   * @param {PushSubscription} subscription Subscription info
   */
  public async removeUserSubscription(user: string, subscription: PushSubscription): Promise<boolean> {
    const sub = this.createSubData(subscription);
    const userToSub = this.createUserToSubData(user, subscription.endpoint);

    const res: [] = await this.redis
      .multi()
      .srem(userToSub.key, userToSub.data) // remove subscription reference from data set
      .del(sub.key) // remove subscription
      .exec();

    const errors = res.filter(r => r[0] !== null);
    if (errors.length > 0) {
      throw new InternalServerErrorException('Subscription could not be remmoved', 'webpush_unsubscribe');
    }

    return true;
  }
}
