import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { PushSubscription } from 'web-push';
import { RedisService } from '../../db/redis/redis.service';
import { ConfigService } from '../../config/config.service';
import { RedisConfigDto } from '../../db/redis/dto';
import { RedisArgs } from '../../db/redis/redis.service';
import { Subscription } from './subscription';

@Injectable()
export class SubsRepository {
  constructor(private readonly redis: Redis) { }

  public static factory = {
    provide: SubsRepository,
    useFactory: async (config: ConfigService, redis: RedisService): Promise<SubsRepository> => {
      const redisConfig: RedisConfigDto = await config.validate('web-push.redis', RedisConfigDto);
      const redisInstance = await redis.createInstance('web-push', redisConfig);
      return new SubsRepository(redisInstance);
    },
    inject: [ConfigService, RedisService],
  };

  /**
   * Create redis hash input from subscription info
   * @param {PushSubscription} subscription Subscription info
   */
  private createSubData(subscription: Subscription): RedisArgs {
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
  private createUserToSubData(subscription: Subscription): RedisArgs {
    const key = `user:${subscription.user.id}:subs`;
    const data = [
      subscription.endpoint,
    ];

    return {
      key,
      data,
    };
  }

  /**
   * Get subscriptions by user ID
   * @param {string} userId User ID
   */
  public async fetchAllByUser(userId: string): Promise<PushSubscription[]> {
    const subscriptions: PushSubscription[] = []; // container of all subscriptions
    const subs: string[] = await this.redis.smembers(`user:${userId}:subs`); // get user subscriptions set
    if (subs.length === 0) {
      return subscriptions; // no subscriptions, return empty container
    }
    const pipeline = this.redis.pipeline(); // create a pipeline
    // add each subscription to the pipeline
    subs.map((sub, index) => pipeline.hgetall(`sub:${sub}`, (error, res: any) => {
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
   * Get subscriptions by user IDs
   * @param {Array<string>} userIds User ID
   */
  public async fetchAllByUsers(userIds: Array<string>): Promise<Map<string, Array<PushSubscription>>> {
    const usersSubs: Map<string, Array<PushSubscription>> = new Map();
    const promises = [];
    for (const id of userIds) {
      promises.push(this.fetchAllByUser(id));
    }
    const entries = (await Promise.all(promises)).entries();
    for (const [index, value] of entries) {
      if (value.length > 0) {
        usersSubs.set(userIds[index], value);
      }
    }
    return usersSubs;
  }

  /**
   * Remove many subscriptions
   * @param {Subscription[]} subscriptions Array of subscription to remove
   */
  public async removeMany(subscriptions: Subscription[]): Promise<boolean> {
    const pipeline = this.redis.pipeline();
    subscriptions.map(sub => {
      // add operations to the pipeline
      pipeline.srem(`user:${sub.user.id}:subs`, sub.endpoint); // remove subscription from user's subscriptions set
      pipeline.del(`sub:${sub}`); // remove the subscription
    });
    await pipeline.exec();

    return true;
  }

  /**
   * Save subscription
   * @param {Subscription} subscription Subscription
   * @returns {boolean} True if subscription was saved
   */
  public async save(subscription: Subscription): Promise<boolean> {
    const sub = this.createSubData(subscription);
    const userToSub = this.createUserToSubData(subscription);

    await this.redis
      .multi()
      .hmset(sub.key, sub.data) // store subscription
      .sadd(userToSub.key, userToSub.data) // add subscription to user subscriptions set
      .exec();
    return true;
  }
}
