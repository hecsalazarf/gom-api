import { Module, NestModule, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CsrfMiddleware, CsrfgenMiddleware } from '../middleware';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, CsrfgenMiddleware)
      .forRoutes(AuthController);
  }
}
