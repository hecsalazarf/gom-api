import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { BpModule } from './bp/bp.module';
import { OrderModule } from './order/order.module';
import { CsrfMiddleware, AuthMiddleware } from '../middleware';
import { AuthModule } from 'src/auth/auth.module';

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
  ],
})
export class GraphqlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, AuthMiddleware)
      .forRoutes('graphql');
  }
}
