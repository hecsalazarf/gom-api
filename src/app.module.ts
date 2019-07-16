import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { SessionMiddleware } from './middleware/session.middleware';
import { CookieMiddleware } from './middleware/cookie.middleware';

@Module({
  imports: [AuthModule, ConfigModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CookieMiddleware, SessionMiddleware)
      .forRoutes('*');
  }
}
