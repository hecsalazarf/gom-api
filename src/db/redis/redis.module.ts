import { Module } from '@nestjs/common';
import { OnRedisDestroy } from './hooks/ondestroy.hook';
import { ConfigService } from '../../config/config.service';
import { RedisService } from './redis.service';

const RedisFactory = {
  provide: RedisService,
  useFactory: (config: ConfigService) => {
    return new Promise((resolve, reject) => {
      if (!config.has('redis.port') || !config.has('redis.host')) {
        reject('Redis configuration not found'); // Reject promise when no config keys are set up
      }
      const redis = new RedisService(config.get('redis.port'), config.get('redis.host'));
      redis.on('ready', () => {
        resolve(redis); // Return the Redis instance
      });
      redis.on('error', (error) => {
        reject(error); // Reject on error
      });
    });
  },
  inject: [ConfigService],
};

@Module({
  providers: [RedisFactory, OnRedisDestroy],
  exports: [RedisFactory],
})
export class RedisModule {}
