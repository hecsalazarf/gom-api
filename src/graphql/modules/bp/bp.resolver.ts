import { Args, Info, Query, Resolver, Mutation } from '@nestjs/graphql';
import { UseInterceptors, UseGuards, UseFilters } from '@nestjs/common';
import { Bp } from './model/bp';
import { PrismaService } from '../prisma/prisma.service';
import { BpConnection } from '../../graphql.schema';
import { AuditInterceptor, Permission, PermissionGuard, GraphqlFilter } from '../../graphql.common';

@Resolver('Bp')
@UseFilters(GraphqlFilter)
@UseGuards(PermissionGuard)
export class BpResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('bp')
  @Permission('read:bp')
  async getBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.query.bp(args, info);
  }

  @Query('bpsConnection')
  @Permission('read:bps')
  async getBps(@Args() args: any, @Info() info: any): Promise<BpConnection> {
    return await this.prisma.query.bpsConnection(args, info);
  }

  @Mutation('createBp')
  @Permission('create:bp')
  @UseInterceptors(AuditInterceptor)
  async createBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.mutation.createBp(args, info);
  }

  @Mutation('updateBp')
  @Permission('update:bp')
  @UseInterceptors(AuditInterceptor)
  async updateBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.mutation.updateBp(args, info);
  }
}
