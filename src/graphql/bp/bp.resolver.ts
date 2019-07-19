import { Args, Info, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Bp } from './model/bp';
import { PrismaService } from '../prisma/prisma.service';
import { BpConnection } from '../graphql.schema';

@Resolver('Bp')
export class BpResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('bp')
  async getBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.query.bp(args, info);
  }

  @Query('bpsConnection')
  async getBps(@Args() args: any, @Info() info: any): Promise<BpConnection> {
    return await this.prisma.query.bpsConnection(args, info);
  }

  @Mutation('createBp')
  async createBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.mutation.createBp(args, info);
  }

  @Mutation('updateBp')
  async updateBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.mutation.updateBp(args, info);
  }
}
