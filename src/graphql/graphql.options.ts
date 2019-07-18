import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    /* These options will be passed down to the underlying Apollo instance */
    return {
      typePaths: ['./**/*.graphql'],
      path: '/graphql', // endpoint
      /*
      * With an existing HTTP server (created with createServer),
      * we can add subscriptions using the installSubscriptionHandlers.
      * See more https://www.apollographql.com/docs/apollo-server/features/subscriptions/
      */
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        /*
        * False to disable resolveType() method for Interface and Union types.
        * This can be passed in with the field resolvers as __resolveType().
        * See more https://www.apollographql.com/docs/apollo-server/api/graphql-tools/
        */
        requireResolversForResolveType: false,
      },
    };
  }
}
