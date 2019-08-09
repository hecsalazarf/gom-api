import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ConnectionContext } from 'subscriptions-transport-ws';
import * as cookie from 'cookie';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    /* These options will be passed down to the underlying Apollo instance */
    return {
      typePaths: ['./**/*.graphql'],
      path: '/graphql', // endpoint
      context: ({ req, connection }) => {
        // The function to create a context for subscriptions includes connection, while the function
        // for Queries and Mutations contains the arguments for the integration, in express's case req and res.
        if (connection) {
          // check connection for metadata
          return connection.context;
        } else {
          return {
            user: req.user, // add user got from AuthMiddleware to context
          };
        }
      },
      subscriptions: {
        path: '/graphql',
        onConnect: (connectionParams: any, websocket: any, context: ConnectionContext) => {
          if (context.request.headers.cookie) {
            const res = cookie.parse(context.request.headers.cookie);
            if (res['access-token']) {
              return {
                lalalx: true,
              };
            }
          }
          throw new Error('No authorization');
          // if (connectionParams.authToken) {
          //   return validateToken(connectionParams.authToken)
          //     .then(findUser(connectionParams.authToken))
          //     .then(user => {
          //       return {
          //         currentUser: user,
          //       };
          //     });
          // }
          // throw new Error('Missing auth token!');
        },
      },
      // With an existing HTTP server (created with createServer),
      // we can add subscriptions using the installSubscriptionHandlers.
      // See more https://www.apollographql.com/docs/apollo-server/features/subscriptions/
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
