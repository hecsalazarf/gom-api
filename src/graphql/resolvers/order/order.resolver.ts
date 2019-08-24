import { UseFilters, UseInterceptors, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Info, Context, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { OrderConnection } from '../../graphql.schema';
import { Order } from './model/order';
import { AuditInterceptor, Permission, PermissionGuard, GraphqlFilter } from '../../graphql.common';
import { OrderNotification, OrderNotifyEvents } from './order.notification';
import { OrderOwnerGuard } from './guards';

@Resolver('Order')
@UseGuards(PermissionGuard, OrderOwnerGuard)
@UseFilters(GraphqlFilter)
export class OrderResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notification: OrderNotification,
  ) {}

  @Query('order')
  @Permission('read:order', 'own')
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
  async createOrder(@Args() args: any, @Info() info: any, @Context('user') user: any): Promise<Order> {
    const order: Order = await this.prisma.mutation.createOrder(args, info);
    this.notification.emit(OrderNotifyEvents.CREATE, order, user.id);
    return order;
  }

  @Mutation('updateOrder')
  @Permission('update:order', 'own')
  @UseInterceptors(AuditInterceptor)
  async updateOrder(@Args() args: any, @Info() info: any,  @Context('user') user: any): Promise<Order> {
    const order: Order = await this.prisma.mutation.updateOrder(args, info);
    this.notification.emit(OrderNotifyEvents.UPDATE, order, user.id);
    return order;
  }

  @Subscription('order')
  @Permission('subscribe:order')
  onOrderMutation(@Args() args, @Info() info) {
    return this.prisma.subscription.order(args, info);
  }
}
