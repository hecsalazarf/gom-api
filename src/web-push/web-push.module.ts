import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import csurf from 'csurf';
import { WebPushService } from './web-push.service';
import { WebPushController } from './web-push.controller';
import { RedisModule } from '../db/redis/redis.module';
import { AuthMiddleware, SessionMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';
import { MqModule } from '../mq/mq.module';
import { SubsRepository } from './providers';

@Module({
  imports: [RedisModule, AuthModule, MqModule],
  providers: [WebPushService.factory, SubsRepository.factory],
  controllers: [WebPushController],
  exports: [WebPushService.factory],
})
export class WebPushModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(SessionMiddleware, csurf(), AuthMiddleware) // TODO Reactivate CSRF
      .forRoutes(WebPushController);
  }
}
