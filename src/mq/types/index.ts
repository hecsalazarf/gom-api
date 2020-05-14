import { Queue, QueueScheduler } from 'bullmq';

export enum DefaultQueues {
  CLEANING = 'cleaning',
}

export interface Queues {
  queue: Queue;
  scheduler?: QueueScheduler;
}
