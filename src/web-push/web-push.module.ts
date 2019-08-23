import * as assert from 'assert';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as csurf from 'csurf';
import { WebPushService } from './web-push.service';
import { WebPushController } from './web-push.controller';
import { RedisModule } from '../db/redis/redis.module';
import { AuthMiddleware, SessionMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';
import { ConfigService } from '../config/config.service';
import { RedisService } from '../db/redis/redis.service';

const REDIS_HOST = 'web-push.redis.host';
const REDIS_PORT = 'web-push.redis.port';
const REDIS_DB = 'web-push.redis.db';

const WebPushFactory = {
  provide: WebPushService,
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
    const redisInstance = await redis.createInstance('web-push', options);
    return new WebPushService(redisInstance, config);
  },
  inject: [ConfigService, RedisService],
};

@Module({
  imports: [RedisModule, AuthModule],
  providers: [WebPushFactory],
  controllers: [WebPushController],
  exports: [WebPushFactory],
})
export class WebPushModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware, csurf(), AuthMiddleware) // TODO Reactivate CSRF
      .forRoutes(WebPushController);
  }
}
