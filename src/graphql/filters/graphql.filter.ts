import { Catch } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { ApolloError } from 'apollo-server-errors';

@Catch(ApolloError, GraphQLError)
export class GraphqlFilter implements GqlExceptionFilter {
  catch(exception: GraphQLError, host: GqlArgumentsHost) {
    // const gqlHost = GqlArgumentsHost.create(host);
    if (exception instanceof GraphQLError) {
      /*
      * Transform GraphQLError into ApolloError as it is the standard error
      * that Apollo Server handles.
      */
     return new ApolloError(exception.message, 'GRAPHQL_EXECUTION_ERROR' );
    }

    return exception;

  }
}
