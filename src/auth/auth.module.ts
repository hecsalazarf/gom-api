import { Module, NestModule, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { session } from '../middleware/session.middleware';
import { cookie } from '../middleware/cookie.middleware';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cookie(), session())
      .forRoutes(AuthController);
  }
}
