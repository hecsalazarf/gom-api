import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import csurf from 'csurf';
import { WebPushService } from './web-push.service';
import { WebPushController } from './web-push.controller';
import { RedisModule } from '../db/redis/redis.module';
import { AuthMiddleware, SessionMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';
import { ConfigService } from '../config/config.service';
import { RedisService } from '../db/redis/redis.service';
import { WebpushConfigDto } from './dto';

const WebPushFactory = {
  provide: WebPushService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    const res: WebpushConfigDto = await config.validate('web-push', WebpushConfigDto);
    const redisInstance = await redis.createInstance('web-push', res.redis);
    return new WebPushService(redisInstance, res.vapid);
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
