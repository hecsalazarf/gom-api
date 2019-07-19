import { UseFilters } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Info } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { OrderConnection } from '../graphql.schema';
import { Order } from './model/order';
import { GraphqlFilter } from '../graphql.filter';

@UseFilters(GraphqlFilter)
@Resolver('Order')
export class OrderResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('order')
  async getOrder(@Args() args: any, @Info() info: any): Promise<Order> {
    return await this.prisma.query.order(args, info);
  }

  @Query('ordersConnection')
  async getOrders(@Args() args: any, @Info() info: any): Promise<OrderConnection> {
    return await this.prisma.query.ordersConnection(args, info);
  }

  @Mutation('createOrder')
  async createOrder(@Args() args: any, @Info() info: any): Promise<Order> {
    return await this.prisma.mutation.createOrder(args, info);
  }

  @Mutation('updateOrder')
  async updateOrder(@Args() args: any, @Info() info: any): Promise<Order> {
    return await this.prisma.mutation.updateOrder(args, info);
  }
}
