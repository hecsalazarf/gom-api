import { Resolver, Mutation, Args, Info, Query } from '@nestjs/graphql';
import { UseFilters, UseInterceptors } from '@nestjs/common';
import { GraphqlFilter } from '../../filters';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { Promotion } from './model/promotion';
import { AuditInterceptor } from '../../interceptors';
import { PromotionConnection } from '../../graphql.schema';

@Resolver('Promotion')
@UseFilters(GraphqlFilter)
export class PromoResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('promotion')
  async getPromotion(@Args() args: any, @Info() info: any): Promise<Promotion> {
    return await this.prisma.query.promotion(args, info);
  }

  @Query('promotionsConnection')
  async getPromotions(@Args() args: any, @Info() info: any): Promise<PromotionConnection> {
    return await this.prisma.query.promotionsConnection(args, info);
  }

  @Mutation('createPromotion')
  @UseInterceptors(AuditInterceptor)
  async createPromotion(@Args() args: any, @Info() info: any): Promise<Promotion> {
    return await this.prisma.mutation.createPromotion(args, info);
  }

  @Mutation('updatePromotion')
  @UseInterceptors(AuditInterceptor)
  async updatePromotion(@Args() args: any, @Info() info: any): Promise<Promotion> {
    return await this.prisma.mutation.updatePromotion(args, info);
  }
}
