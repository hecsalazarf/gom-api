import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { ForbiddenError, ApolloError } from 'apollo-server-errors';
import { PrismaService } from '../../../../db/prisma/prisma.service';
import { BpWhereInput, BpWhereUniqueInput, BpSubscriptionWhereInput, BpCreateInput } from '../../../graphql.schema';

import { Ability } from '@casl/ability';

@Injectable()
export class BpOwnerGuard implements CanActivate {
  private readonly logger: Logger;
  constructor(private readonly prisma: PrismaService, private readonly reflector: Reflector) {
    this.logger = new Logger(BpOwnerGuard.name);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(context);
    // @ts-ignore: Nest does not expose gqlCtx.handler
    const permission: string[] = this.reflector.get('permission', gqlCtx.handler); // get metadata from handler (resolver)
    if (typeof permission === 'undefined') {
      // if no permission whatsoever, allow execution by default
      return true;
    }
    const args = gqlCtx.getArgs(); // get args
    const { user } = gqlCtx.getContext(); // get user

    let res: boolean;
    if (permission.includes('read:bp') || permission.includes('update:bp') || permission.includes('delete:bp')) {
      res = await this.checkWhereUniqueInput(args.where, user);
    } else if (permission.includes('read:bps')) {
      res = this.checkWhereInput(args.where || '', user);
    } else if (permission.includes('create:bp')) {
      res = this.checkDataInput(args.data, user);
    } else if (permission.includes('subscribe:bp')) {
      res = this.checkSubscriptionWhereInput(args.where, user);
    } else {
      // no permission whatsoever, allow execution by default
      return true;
    }

    if (typeof res === 'undefined') {
      throw new ApolloError('Cannot validate BP owner at this moment', 'SERVER_ERROR');
    }
    if (!res) {
      throw new ForbiddenError('Cannot access this BP');
    }
    return true;
  }

  private async checkWhereUniqueInput(where: BpWhereUniqueInput, user: { id: string; ability: Ability}): Promise<boolean | undefined> {
    const filter: BpWhereInput = {};
    if (user.ability.can('role', 'seller')) {
      // if customer, found the BP issued to him
      filter.customerOf_some = {
        extUid: user.id,
      };
    } else {
      // no role found, error
      return undefined;
    }
    try {
      return await this.prisma.cexists.Bp({ ...where, ...filter });
    } catch (error) {
      this.logger.error(error.message);
      return undefined;
    }
  }

  private checkWhereInput(where: BpWhereInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'seller') && where.customerOf_some) {
      // if seller, found the BP assigned to him
      return where.customerOf_some.extUid === user.id;
    } else {
      return undefined;
    }
  }

  private checkDataInput(data: BpCreateInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'seller') && data.customerOf && data.customerOf.connect) {
      // if seller, found the BP assigned to him
      return data.customerOf.connect.findIndex(u => u.extUid === user.id) !== -1;
    } else {
      return undefined;
    }
  }

  private checkSubscriptionWhereInput(where: BpSubscriptionWhereInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'seller') && where.node && where.node.customerOf_some) {
      // if seller, found the BP assigned to him
      return where.node.customerOf_some.extUid === user.id;
    } else {
      return undefined;
    }
  }
}
