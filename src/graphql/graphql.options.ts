import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable, Logger } from '@nestjs/common';
import { ConnectionContext } from 'subscriptions-transport-ws';
import { SessionService } from '../auth/session/session.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  constructor(
    private readonly session: SessionService,
    private readonly auth: AuthService,
  ) {}
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    /* These options will be passed down to the underlying Apollo instance */
    return {
      typePaths: ['./**/*.graphql'],
      path: '/graphql', // endpoint
      debug: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ? false : true,
      context: ({ req, connection }): any => {
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
        onConnect: async (connectionParams: any, websocket: any, context: ConnectionContext): Promise<any> => {
          if (context.request.headers.cookie) {
            const sessionCookie = this.session.getCookie(context.request.headers.cookie);
            const accessToken = this.auth.getCookie(context.request.headers.cookie);
            if (sessionCookie && accessToken) {
              try {
                const session = await this.session.verify(sessionCookie);
                const token = `${accessToken}.${session.access_token_sign}`;
                const decoded = await this.auth.verify(token);
                return {
                  user: {
                    id: decoded.sub,
                    ability: this.auth.buildAbility(decoded),
                  },
                };
              } catch (error) {
                Logger.error(`${error.message} | ${context.request.headers['x-forwarded-for'] || ''}`, '', 'OnConnectWS');
                throw new Error('No authorization to connect');
              }
            }
          }
          Logger.error(`No access token to validate | ${context.request.headers['x-forwarded-for'] || ''}`, '', 'OnConnectWS');
          throw new Error('No authorization to connect');
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
