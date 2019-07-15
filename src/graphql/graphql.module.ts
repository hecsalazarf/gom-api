import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BpModule } from './bp/bp.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    BpModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: './src/graphql/schema.gql',
      include: [BpModule],
      path: '/graphql',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: './src/graphql/schema.gql',
      include: [UserModule],
      path: '/graphqlalt', // alternative endpoint
    }),
  ],
})
export class GraphqlModule {}
