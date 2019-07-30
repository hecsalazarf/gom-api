import { Module, NestModule, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalAuthService } from './services/local.service';
import { CsrfMiddleware, CsrfgenMiddleware } from '../middleware';
import { PrismaModule } from '../db/prisma/prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, LocalAuthService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, CsrfgenMiddleware)
      .forRoutes(AuthController);
  }
}
