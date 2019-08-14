import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { BpModule, OrderModule } from './resolvers';
import { CsrfMiddleware, AuthMiddleware, SessionMiddleware } from '../middleware';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
      imports: [
        BpModule,
        OrderModule,
        AuthModule, // to inject dependencies in GraphqlOptions
      ],
    }),
    AuthModule,
  ],
})
export class GraphqlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CsrfMiddleware, SessionMiddleware, AuthMiddleware)
      .forRoutes('graphql');
  }
}
