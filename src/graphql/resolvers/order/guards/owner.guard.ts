import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { ForbiddenError, ApolloError } from 'apollo-server-errors';
import { PrismaService } from '../../../../db/prisma/prisma.service';
import { OrderWhereInput } from '../../../../db/prisma/prisma.binding';

@Injectable()
export class OrderOwnerGuard implements CanActivate {
  private readonly logger: Logger;
  constructor(private readonly prisma: PrismaService, private readonly reflector: Reflector) {
    this.logger = new Logger(OrderOwnerGuard.name);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx: any = GqlExecutionContext.create(context); // any type to omit handler no-type compilation error
    const permission: string[] = this.reflector.get('permission', gqlCtx.handler); // get metadata from handler (resolver)
    if (typeof permission === 'undefined' || !permission.includes('own')) {
      // if no permission whatsoever, or own permission, allow execution by default
      return true;
    }
    const { where } = gqlCtx.getArgs(); // get args
    const { user } = gqlCtx.getContext(); // get user
    const filter: OrderWhereInput = {};
    if (user.ability.can('role', 'customer')) {
      // if customer, found the order issued to him
      filter.issuedTo = {
        uid: user.id,
      };
    } else if (user.ability.can('role', 'seller')) {
      // if seller, found the order assigned to him
      filter.assignedTo = {
        extUid: user.id,
      };
    } else {
      // no role found, error
      this.logger.error('No role found to validate order owner');
      throw new ApolloError('Cannot validate order owner at this moment', 'SERVER_ERROR');
    }
    let res: boolean;
    try {
      res = await this.prisma.cexists.Order({ ...where, ...filter });
    } catch (error) {
      this.logger.error(error.message);
      throw new ApolloError('Cannot validate order owner at this moment', 'SERVER_ERROR');
    }
    if (!res) {
      throw new ForbiddenError('Cannot access this order');
    }
    return true;
  }
}
