import { Injectable } from '@nestjs/common';
import { Queue, Worker, QueueScheduler, QueueOptions, Processor, WorkerOptions, QueueSchedulerOptions } from 'bullmq';
import { Redis, RedisOptions } from 'ioredis';
import { RedisService } from '../db/redis/redis.service';
import { MqConfigDto } from './dto';

@Injectable()
export class MqService {
  private readonly redis: RedisService;
  private readonly config: MqConfigDto;

  constructor(config: MqConfigDto, redis: RedisService) {
    this.config = config;
    this.redis = redis;
  }

  private createConnection(name: string): Redis {
    const redisOpts: RedisOptions = {
      host: this.config.redis.host,
      port: this.config.redis.port,
      db: this.config.redis.db
    };
    // to avoid conflict, the Redis connection is created synchronously
    // Bull uses the ready event to load the Lua scripts
    return this.redis.createInstanceSync(name, redisOpts);
  }

  /**
   * Create bullmq queue. When the schedule object is provided, a QueueScheduler
   * instance is created as well.
   * No need to provide a Redis connection.
   * @param {string} name Queue name
   * @param {QueueOptions} options Queue options
   * @param {schedule} schedule Queue Scheduler options
   * @returns {Queue} Bullmq queue
   */
  public createQueue(name: string, options?: QueueOptions, schedule?: QueueSchedulerOptions): Queue {
    const queueOpts = options || {};
    // override connection
    queueOpts.connection = this.createConnection(`mq:queue:${name}`);
    const queue = new Queue(name, queueOpts);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let scheduler: QueueScheduler;
    if (typeof schedule !== 'undefined') {
      schedule.connection = this.createConnection(`mq:schedule:${name}`);
      scheduler = new QueueScheduler(name, schedule);
    }
    return queue;
  }

  /**
   * Create bullmq worker. Wrapper for bullmq worker.
   * No need to provide a Redis connection.
   * @param {string} queue Worker name
   * @param {Processor} processor Worker processor
   * @param {WorkerOptions} options Worker options
   * @returns {Worker} Bullmq worker
   */
  public createWorker(queue: string, processor: string | Processor, options?: WorkerOptions): Worker {
    const workerOptions = options || {};
    // override connection
    workerOptions.connection = this.createConnection(`mq:worker:${queue}`);
    const worker = new Worker(queue, processor, workerOptions);
    return worker;
  }
}
