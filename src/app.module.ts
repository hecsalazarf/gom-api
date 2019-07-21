import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { SessionMiddleware, CookieMiddleware } from './middleware';
import { CatchallFilter } from './app.filter';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  providers: [
    {
      /*
        Global-scoped exception filter registered this way, allows to perform
        dependancy injection. See more https://docs.nestjs.com/exception-filters
      */
      provide: APP_FILTER,
      useClass: CatchallFilter,
    },
  ],
  imports: [AuthModule, ConfigModule, GraphqlModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CookieMiddleware, SessionMiddleware)
      .forRoutes('*');
  }
}
