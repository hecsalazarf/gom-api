import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { WebPushService } from './web-push.service';
import { WebPushController } from './web-push.controller';
import { RedisModule } from '../db/redis/redis.module';
import { CsrfMiddleware, AuthMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [RedisModule, AuthModule],
  providers: [WebPushService],
  controllers: [WebPushController],
  exports: [WebPushService],
})
export class WebPushModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, AuthMiddleware)
      .forRoutes(WebPushController);
  }
}
