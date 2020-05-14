import { Injectable, Logger } from '@nestjs/common';
import Redis from 'ioredis';
import { KeyType } from 'ioredis';

export interface RedisArgs {
  key: KeyType;
  data: any[];
}

@Injectable()
export class RedisService {
  private readonly instances: Map<string, Redis.Redis>;
  private readonly logger: Logger;
  constructor() {
    this.instances = new Map();
    this.logger = new Logger(RedisService.name);
  }

  /**
   * Create a new instance of ioredis given the specified options
   * @param {string} id ID of the Redis instance, it can be any string
   * @param {IORedis.RedisOptions} options Redis options, see ioredis options
   * @returns The ioredis instance, or error, in case of not being able to connect
   */
  public createInstance(id: string, options?: Redis.RedisOptions): Promise<Redis.Redis> {
    return new Promise((resolve, reject) => {
      let instance: Redis.Redis;
      try {
        instance = this.createInstanceSync(id, options);
      } catch (error) {
        reject(error);
      }
      instance.on('ready', () => {
        resolve(instance); // Return the Redis instance
      });
      instance.on('error', (error) => {
        this.logger.error(`Cannot create redis instance '${id}' | ${error.message}`);
        reject(error); // Reject on error
      });
    });
  }

  /**
   * Create a new instance of ioredis given the specified options. Sync, no wait
   * @param {string} id ID of the Redis instance, it can be any string
   * @param {IORedis.RedisOptions} options Redis options, see ioredis options
   * @returns The ioredis instance, or error, in case of not being able to connect
   */
  public createInstanceSync(id: string, options?: Redis.RedisOptions): Redis.Redis {
    if (this.instances.has(id)) {
      throw new Error(`Instance with ID ${id} already exists`);
    }
    const instance = new Redis(options);
    this.instances.set(id, instance);
    return instance;
  }

  /**
   * Get the Redis instance by ID
   * @param id ID of the Redis instance, it can be any string
   * @returns The ioredis instance, or null, in case no instance matches the ID
   */
  public getInstance(id: string): null | Redis.Redis {
    return this.instances.has(id) ? this.instances.get(id) : null;
  }

  /**
   * Get all the Redis instances
   * @returns All ioredis instances
   */
  public getAllInstances(): Map<string, Redis.Redis> {
    return this.instances;
  }
}
