import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BpModule } from './bp/bp.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    BpModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
  ],
})
export class GraphqlModule {}
