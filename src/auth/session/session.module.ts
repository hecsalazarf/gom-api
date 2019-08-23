import * as assert from 'assert';
import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { ConfigService } from '../../config/config.service';
import { RedisService } from '../../db/redis/redis.service';
import { RedisModule } from '../../db/redis/redis.module';

const REDIS_HOST = 'session.redis.host';
const REDIS_PORT = 'session.redis.port';
const REDIS_DB = 'session.redis.db';

const SessionServiceFactory = {
  provide: SessionService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    const errorMessage = 'Missing session store configuration';
    assert(config.has(REDIS_HOST), errorMessage);
    assert(config.has(REDIS_PORT), errorMessage);
    assert(config.has(REDIS_DB), errorMessage);

    const options = {
      host: config.get(REDIS_HOST),
      port: config.get(REDIS_PORT),
      db: config.get(REDIS_DB),
    };
    const redisInstance = await redis.createInstance('session', options);
    return new SessionService(redisInstance, config);
  },
  inject: [ConfigService, RedisService],
};
@Module({
  imports: [RedisModule],
  providers: [SessionServiceFactory],
  exports: [SessionServiceFactory],
})
export class SessionModule {}
