import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from './config/config.module';
import { CookieMiddleware } from './middleware';
import { HttpExceptionFilter } from './app.filter';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  providers: [
    {
      /*
      * Global-scoped exception filter registered this way, allows to perform
      * dependancy injection. See more https://docs.nestjs.com/exception-filters
      */
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  imports: [ConfigModule, GraphqlModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CookieMiddleware)
      .forRoutes('*');
  }
}
