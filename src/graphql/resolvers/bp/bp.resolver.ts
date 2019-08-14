import { Args, Info, Query, Resolver, Mutation, Context } from '@nestjs/graphql';
import { UseInterceptors, UseGuards, UseFilters, Logger } from '@nestjs/common';
import { Bp } from './model/bp';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { BpConnection } from '../../graphql.schema';
import { AuditInterceptor, Permission, PermissionGuard, GraphqlFilter } from '../../graphql.common';
import { UtilsService } from '../../../utils/utils.service';
import { BpDeleteGuard } from './guards/delete.guard';

@Resolver('Bp')
@UseFilters(GraphqlFilter)
@UseGuards(PermissionGuard)
export class BpResolver {
  private readonly logger = new Logger(BpResolver.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly utils: UtilsService,
  ) {}

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
    args.data.extUid = await this.utils.genBase64Id(10); // generate uid for anonymous session
    return await this.prisma.mutation.createBp(args, info);
  }

  @Mutation('updateBp')
  @Permission('update:bp')
  @UseInterceptors(AuditInterceptor)
  async updateBp(@Args() args: any, @Info() info: any): Promise<Bp> {
    return await this.prisma.mutation.updateBp(args, info);
  }

  @Mutation('deleteBp')
  @Permission('delete:bp')
  @UseGuards(BpDeleteGuard)
  async deleteBp(@Args() args: any, @Info() info: any, @Context('user') user: any): Promise<Bp> {
    const bp: Bp = await this.prisma.mutation.deleteBp(args, info);
    this.logger.log(`BP with uid ${args.where.uid} was deleted by ${user.id}`);
    return bp;
  }
}
