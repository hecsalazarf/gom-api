import { Module, NestModule, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalAuthService, Auth0Service } from './providers';
import { CsrfMiddleware, CsrfgenMiddleware, SessionMiddleware } from '../middleware';
import { PrismaModule } from '../db/prisma/prisma.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [HttpModule, PrismaModule, SessionModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalAuthService,
    Auth0Service,
  ],
  exports: [AuthService, SessionModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, CsrfgenMiddleware, SessionMiddleware)
      .forRoutes(AuthController);
  }
}
