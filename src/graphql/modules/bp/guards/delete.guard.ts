import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ApolloError, UserInputError } from 'apollo-server-errors';
import { PrismaService } from '../../../../db/prisma/prisma.service';

@Injectable()
export class BpDeleteGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly prisma: PrismaService) {}

  /**
   * This should be the entry point for any other bussines rule associated with the
   * deletion of a BP. If there are more rules, create seperate instances which
   * wrap each one.
   * DO NOT CREATE MORE GUARDS RELATED TO BP DELETION BUSINESS RULES.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context); // any type to omit handler no-type compilation error
    const args = gqlCtx.getArgs();
    if (!args.where.uid) { // if uid is missing, throw an error
      throw new UserInputError('Missing uid in arguments');
    }
    // ckeck orders issued to the BP that are still active
    // we would use the built-in prisma.exists method, but it has a bug
    // https://github.com/prisma/prisma-binding/issues/215
    const orders = await this.prisma.query.orders({
      where: {
        issuedTo: {
          uid: args.where.uid,
        },
      stage_in: [ 'OPEN', 'IN_PROCESS' ],
      },
      first: 1, // we only need one
    }, '{ uid }'); // no data needed
    if (orders.length > 0) {
      // do not allow to delete when there are active orders
      throw new ApolloError('BP with active orders cannot be deleted', 'BP_WITH_ACTIVE_ORDERS');
    }
    return true;
  }
}
