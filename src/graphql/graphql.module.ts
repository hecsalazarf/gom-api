import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BpModule } from './bp/bp.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';
import { OrderModule } from './order/order.module';
import { CsrfMiddleware } from '../middleware';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    ConfigModule,
    PrismaModule,
    BpModule,
    OrderModule,
  ],
})
export class GraphqlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware)
      .forRoutes('graphql');
  }
}
