import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { ForbiddenError, ApolloError } from 'apollo-server-errors';
import { PrismaService } from '../../../../db/prisma/prisma.service';
import { PromotionWhereUniqueInput, PromotionWhereInput, PromotionCreateInput, PromotionSubscriptionWhereInput } from '../../../graphql.schema';
import { Ability } from '@casl/ability';

@Injectable()
export class PromotionOwnerGuard implements CanActivate {
  private readonly logger: Logger;
  constructor(private readonly prisma: PrismaService, private readonly reflector: Reflector) {
    this.logger = new Logger(PromotionOwnerGuard.name);
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
    if (permission.includes('read:promotion') || permission.includes('update:promotion') || permission.includes('delete:promotion')) {
      res = await this.checkWhereUniqueInput(args.where, user);
    } else if (permission.includes('read:promotions')) {
      res = this.checkWhereInput(args.where || '', user);
    } else if (permission.includes('create:promotion')) {
      res = this.checkDataInput(args.data, user);
    } else if (permission.includes('subscribe:promotion')) {
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

  private async checkWhereUniqueInput(where: PromotionWhereUniqueInput, user: { id: string; ability: Ability}): Promise<boolean | undefined> {
    const filter: PromotionWhereInput = {};
    if (user.ability.can('role', 'customer')) {
      return false;
    } else if (user.ability.can('role', 'seller')) {
      // if seller, found the promo assigned to him
      filter.assignedTo = {
        extUid: user.id,
      };
    } else {
      // no role found, error
      return undefined;
    }
    try {
      return await this.prisma.cexists.Promotion({ ...where, ...filter });
    } catch (error) {
      this.logger.error(error.message);
      return undefined;
    }
  }

  private checkWhereInput(where: PromotionWhereInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'customer')) {
      return false;
    } else if (user.ability.can('role', 'seller') && where.assignedTo) {
      // if seller, found the order assigned to him
      return where.assignedTo.extUid === user.id;
    } else {
      return undefined;
    }
  }

  private checkDataInput(data: PromotionCreateInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'customer')) {
      return false;
    } else if (user.ability.can('role', 'seller') && data.assignedTo) {
      // if seller, found the order assigned to him
      return data.assignedTo.connect.extUid === user.id;
    } else {
      return undefined;
    }
  }

  private checkSubscriptionWhereInput(where: PromotionSubscriptionWhereInput, user: { id: string; ability: Ability}): boolean | undefined {
    if (user.ability.can('role', 'customer')) {
      return false;
    } else if (user.ability.can('role', 'seller') && where.node && where.node.assignedTo) {
      // if seller, found the order assigned to him
      return where.node.assignedTo.extUid === user.id;
    } else {
      return undefined;
    }
  }
}
