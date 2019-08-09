import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { WebPushService } from './web-push.service';
import { WebPushController } from './web-push.controller';
import { RedisModule } from '../db/redis/redis.module';
import { CsrfMiddleware, AuthMiddleware, SessionMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';
import { ConfigService } from '../config/config.service';
import { RedisService } from '../db/redis/redis.service';

const WebPushFactory = {
  provide: WebPushService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    if (!config.has('redis.port') || !config.has('redis.host')) {
      throw new Error ('Redis configuration not found'); // Reject promise when no config keys are set up
    }
    const options = {
      host: config.get('redis.host'),
      port: config.get('redis.port'),
      db: 1,
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
      .apply(CsrfMiddleware, SessionMiddleware, AuthMiddleware)
      .forRoutes(WebPushController);
  }
}
