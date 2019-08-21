import { Module, NestModule, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import * as csurf from 'csurf';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalAuthService, Auth0Service } from './providers';
import { CsrfgenMiddleware, SessionMiddleware } from '../middleware';
import { PrismaModule } from '../db/prisma/prisma.module';
import { SessionModule } from './session/session.module';
import { LoginLimiterModule } from './login-limiter/login-limiter.module';

@Module({
  imports: [HttpModule, PrismaModule, SessionModule, LoginLimiterModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalAuthService,
    Auth0Service,
  ],
  exports: [AuthService, SessionModule, LoginLimiterModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware, csurf(), CsrfgenMiddleware ) // TODO Reactivate CSRF
      .forRoutes(AuthController);
  }
}
