import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BpModule } from './bp/bp.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';
import { OrderModule } from './order/order.module';
import { CsrfMiddleware, AuthMiddleware } from '../middleware';
import { ConfigModule } from '../config/config.module';
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
    ConfigModule,
    PrismaModule,
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
