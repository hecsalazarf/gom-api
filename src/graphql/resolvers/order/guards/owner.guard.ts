import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { ForbiddenError, ApolloError } from 'apollo-server-errors';
import { PrismaService } from '../../../../db/prisma/prisma.service';
import { OrderWhereInput, OrderWhereUniqueInput, OrderSubscriptionWhereInput, OrderCreateInput } from '../../../graphql.schema';
import { Ability } from '@casl/ability';

@Injectable()
export class OrderOwnerGuard implements CanActivate {
  private readonly logger: Logger;
  constructor(private readonly prisma: PrismaService, private readonly reflector: Reflector) {
    this.logger = new Logger(OrderOwnerGuard.name);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context);
    // @ts-expect-error: Nest does not expose gqlCtx.handler
    const permission: string[] = this.reflector.get('permission', gqlCtx.handler); // get metadata from handler (resolver)
    if (typeof permission === 'undefined') {
      // if no permission whatsoever, allow execution by default
      return true;
    }
    const args = gqlCtx.getArgs(); // get args
    const { user } = gqlCtx.getContext(); // get user

    let res: boolean;
    if (permission.includes('read:order') || permission.includes('update:order') || permission.includes('delete:order')) {
      res = await this.checkWhereUniqueInput(args.where, user);
    } else if (permission.includes('read:orders')) {
      res = this.checkWhereInput(args.where || '', user);
    } else if (permission.includes('create:order')) {
      res = this.checkDataInput(args.data, user);
    } else if (permission.includes('subscribe:order')) {
      res = this.checkSubscriptionWhereInput(args.where, user);
    } else {
      // no permission whatsoever, allow execution by default
      return true;
    }

    if (typeof res === 'undefined') {
      throw new ApolloError('Cannot validate order owner at this moment', 'SERVER_ERROR');
    }
    if (!res) {
      throw new ForbiddenError('Cannot access this order');
    }
    return true;
  }

  private async checkWhereUniqueInput(where: OrderWhereUniqueInput, user: { id: string; ability: Ability}): Promise<boolean | undefined> {
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
      return undefined;
    }
    try {
      return await this.prisma.cexists.Order({ ...where, ...filter });
    } catch (error) {
      this.logger.error(error.message);
      return undefined;
    }
  }

  private checkWhereInput(where: OrderWhereInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'customer') && where.issuedTo) {
      return where.issuedTo.uid === user.id;
    } else if (user.ability.can('role', 'seller') && where.assignedTo) {
      // if seller, found the order assigned to him
      return where.assignedTo.extUid === user.id;
    } else {
      return undefined;
    }
  }

  private checkDataInput(data: OrderCreateInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'customer') && data.issuedTo) {
      return data.issuedTo.connect.uid === user.id;
    } else if (user.ability.can('role', 'seller') && data.assignedTo) {
      // if seller, found the order assigned to him
      return data.assignedTo.connect.extUid === user.id;
    } else {
      return undefined;
    }
  }

  private checkSubscriptionWhereInput(where: OrderSubscriptionWhereInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'customer') && where.node && where.node.issuedTo) {
      return where.node.issuedTo.uid === user.id;
    } else if (user.ability.can('role', 'seller') && where.node && where.node.assignedTo) {
      // if seller, found the order assigned to him
      return where.node.assignedTo.extUid === user.id;
    } else {
      return undefined;
    }
  }
}
