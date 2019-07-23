import { UseFilters, UseInterceptors, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Info } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { OrderConnection } from '../../graphql.schema';
import { Order } from './model/order';
import { AuditInterceptor, Permission, PermissionGuard, GraphqlFilter } from '../../graphql.common';

@Resolver('Order')
@UseGuards(PermissionGuard)
@UseFilters(GraphqlFilter)
export class OrderResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('order')
  @Permission('read:order')
  async getOrder(@Args() args: any, @Info() info: any): Promise<Order> {
    return await this.prisma.query.order(args, info);
  }

  @Query('ordersConnection')
  @Permission('read:orders')
  async getOrders(@Args() args: any, @Info() info: any): Promise<OrderConnection> {
    return await this.prisma.query.ordersConnection(args, info);
  }

  @Mutation('createOrder')
  @Permission('create:order')
  @UseInterceptors(AuditInterceptor)
  async createOrder(@Args() args: any, @Info() info: any): Promise<Order> {
    return await this.prisma.mutation.createOrder(args, info);
  }

  @Mutation('updateOrder')
  @Permission('update:order')
  @UseInterceptors(AuditInterceptor)
  async updateOrder(@Args() args: any, @Info() info: any): Promise<Order> {
    return await this.prisma.mutation.updateOrder(args, info);
  }
}
