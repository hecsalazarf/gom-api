import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ApolloError, UserInputError } from 'apollo-server-errors';
import { BpRulesService } from '../rules/rules.service';

@Injectable()
export class BpDeleteGuard implements CanActivate {
  constructor(private readonly rules: BpRulesService) {}

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
    if (await this.rules.hasActiveOrders(args.where.uid)) {
      // do not allow to delete when there are active orders
      throw new ApolloError('BP with active orders cannot be deleted', 'BP_WITH_ACTIVE_ORDERS');
    }
    return true;
  }
}
