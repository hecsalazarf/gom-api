import { Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { LoginLimiterService } from './login-limiter.service';
import { ConfigService } from '../../config/config.service';
import { RedisModule } from '../../db/redis/redis.module';
import { RedisService } from '../../db/redis/redis.service';

const LoginLimiterServiceFactory = {
  provide: LoginLimiterService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    if (!config.has('redis.port') || !config.has('redis.host')) {
      throw new Error ('Redis configuration not found'); // Reject promise when no config keys are set up
    }
    const options: RedisOptions = {
      host: config.get('redis.host'),
      port: config.get('redis.port'),
      enableOfflineQueue: false,
      db: 3, // TODOD configurable
    };
    const redisInstance = await redis.createInstance('login-limiter', options);
    return new LoginLimiterService(redisInstance);
  },
  inject: [ConfigService, RedisService],
};

@Module({
  imports: [RedisModule],
  providers: [LoginLimiterServiceFactory],
  exports: [LoginLimiterServiceFactory],
})
export class LoginLimiterModule {}
