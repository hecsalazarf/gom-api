import * as assert from 'assert';
import { Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { LoginLimiterService } from './login-limiter.service';
import { ConfigService } from '../../config/config.service';
import { RedisModule } from '../../db/redis/redis.module';
import { RedisService } from '../../db/redis/redis.service';

const REDIS_HOST = 'login-limiter.redis.host';
const REDIS_PORT = 'login-limiter.redis.port';
const REDIS_DB = 'login-limiter.redis.db';

const LoginLimiterServiceFactory = {
  provide: LoginLimiterService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    const errorMessage = 'Missing login-limiter configuration';
    // check configuration
    assert(config.has(REDIS_HOST), errorMessage);
    assert(config.has(REDIS_PORT), errorMessage);
    assert(config.has(REDIS_DB), errorMessage);

    const options: RedisOptions = {
      host: config.get(REDIS_HOST),
      port: config.get(REDIS_PORT),
      enableOfflineQueue: false,
      db: config.get(REDIS_DB), // TODOD configurable
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
