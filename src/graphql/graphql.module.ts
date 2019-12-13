import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import csurf from 'csurf';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { BpModule, OrderModule } from './resolvers';
import { AuthMiddleware, SessionMiddleware } from '../middleware';
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
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(SessionMiddleware, csurf(), AuthMiddleware) // TODO Reactivate CSRF
      .forRoutes('graphql');
  }
}
