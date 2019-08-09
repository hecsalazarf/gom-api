import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { ConfigService } from '../../config/config.service';
import { RedisService } from '../../db/redis/redis.service';
import { RedisModule } from '../../db/redis/redis.module';

const SessionServiceFactory = {
  provide: SessionService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    if (!config.has('redis.port') || !config.has('redis.host')) {
      throw new Error ('Redis configuration not found'); // Reject promise when no config keys are set up
    }
    const options = {
      host: config.get('redis.host'),
      port: config.get('redis.port'),
      db: 2, // TODOD configurable
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
