import { Resolver, Mutation, Args, Info, Query } from '@nestjs/graphql';
import { UseFilters, UseInterceptors } from '@nestjs/common';
import { GraphqlFilter } from '../../filters';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { Publication } from './model/publication';
import { AuditInterceptor } from '../../interceptors';
import { PublicationConnection } from '../../graphql.schema';

@Resolver('Publication')
@UseFilters(GraphqlFilter)
export class PublicationResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query('publication')
  async getPublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    return await this.prisma.query.publication(args, info);
  }

  @Query('publicationsConnection')
  async getPublications(@Args() args: any, @Info() info: any): Promise<PublicationConnection> {
    return await this.prisma.query.publicationsConnection(args, info);
  }

  @Mutation('createPublication')
  @UseInterceptors(AuditInterceptor)
  async createPublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    return await this.prisma.mutation.createPublication(args, info);
  }

  @Mutation('updatePublication')
  @UseInterceptors(AuditInterceptor)
  async updatePublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    return await this.prisma.mutation.updatePublication(args, info);
  }
}
