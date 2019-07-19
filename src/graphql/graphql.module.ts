import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BpModule } from './bp/bp.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    BpModule,
    OrderModule,
  ],
})
export class GraphqlModule {}
