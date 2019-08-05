import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { BpModule, OrderModule } from './modules';
import { CsrfMiddleware, AuthMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';
import { WebPushModule } from '../web-push/web-push.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
      imports: [
        BpModule,
        OrderModule,
      ],
    }),
    AuthModule,
    WebPushModule,
  ],
})
export class GraphqlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, AuthMiddleware)
      .forRoutes('graphql');
  }
}
