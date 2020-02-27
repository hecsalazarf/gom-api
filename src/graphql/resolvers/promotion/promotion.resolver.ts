import { Resolver, Mutation, Args, Info, Query } from '@nestjs/graphql';
import { UseFilters, UseInterceptors, UseGuards } from '@nestjs/common';
import { GraphqlFilter } from '../../filters';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { Promotion } from './model/promotion';
import { AuditInterceptor } from '../../interceptors';
import { PromotionConnection } from '../../graphql.schema';
import { PermissionGuard, Permission } from '../../../graphql/graphql.common';

@Resolver('Promotion')
@UseFilters(GraphqlFilter)
@UseGuards(PermissionGuard)
export class PromoResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('promotion')
  @Permission('read:promotion')
  async getPromotion(@Args() args: any, @Info() info: any): Promise<Promotion> {
    return await this.prisma.query.promotion(args, info);
  }

  @Query('promotionsConnection')
  @Permission('read:promotions')
  async getPromotions(@Args() args: any, @Info() info: any): Promise<PromotionConnection> {
    return await this.prisma.query.promotionsConnection(args, info);
  }

  @Mutation('createPromotion')
  @Permission('create:promotion')
  @UseInterceptors(AuditInterceptor)
  async createPromotion(@Args() args: any, @Info() info: any): Promise<Promotion> {
    return await this.prisma.mutation.createPromotion(args, info);
  }

  @Mutation('updatePromotion')
  @Permission('update:promotion')
  @UseInterceptors(AuditInterceptor)
  async updatePromotion(@Args() args: any, @Info() info: any): Promise<Promotion> {
    return await this.prisma.mutation.updatePromotion(args, info);
  }
}
