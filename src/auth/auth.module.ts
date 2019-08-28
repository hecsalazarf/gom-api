import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as csurf from 'csurf';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CsrfgenMiddleware, SessionMiddleware } from '../middleware';
import { SessionModule } from './session/session.module';
import { LoginLimiterModule } from './login-limiter/login-limiter.module';
import { Auth0Module } from './auth0/auth0.module';
import { LocalAuthModule } from './local-auth/local-auth.module';
import { PrismaModule } from '../db/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    SessionModule,
    LoginLimiterModule,
    Auth0Module,
    LocalAuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, SessionModule, LoginLimiterModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware, csurf(), CsrfgenMiddleware ) // TODO Reactivate CSRF
      .forRoutes(AuthController);
  }
}
