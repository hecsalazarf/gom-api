import { Resolver, Mutation, Args, Info, Query } from '@nestjs/graphql';
import { UseFilters, UseInterceptors, UseGuards } from '@nestjs/common';
import { ApolloError } from 'apollo-server-errors';
import { GraphqlFilter } from '../../filters';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { Publication } from './model/publication';
import { AuditInterceptor } from '../../interceptors';
import { PublicationConnection } from '../../graphql.schema';
import { PublicationService } from './publication.service';
import { PermissionGuard, Permission } from '../../../graphql/graphql.common';

@Resolver('Publication')
@UseFilters(GraphqlFilter)
@UseGuards(PermissionGuard)
export class PublicationResolver {
  constructor(private readonly prisma: PrismaService, private readonly service: PublicationService) { }

  @Query('publication')
  @Permission('read:publication')
  async getPublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    return await this.prisma.query.publication(args, info);
  }

  @Query('publicationsConnection')
  @Permission('read:publications')
  async getPublications(@Args() args: any, @Info() info: any): Promise<PublicationConnection> {
    return await this.prisma.query.publicationsConnection(args, info);
  }

  @Mutation('createPublication')
  @UseInterceptors(AuditInterceptor)
  @Permission('create:publication')
  async createPublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    const customers  = await this.prisma.query.bps({
      where: {
        customerOf_some: {
          promotions_some: {
            uid: args.data.promotion.connect.uid
          }
        }
      },
      first: 1
    }, '{ uid }');
    if (customers.length < 1) {
      throw new ApolloError('No customers associated', 'NO_CUSTOMERS');
    }
    const publication: Publication = await this.prisma.mutation.createPublication(args, info);
    this.service.broadcast(publication, args.data.promotion.connect.uid);
    return publication;
  }

  @Mutation('updatePublication')
  @UseInterceptors(AuditInterceptor)
  @Permission('update:publication')
  async updatePublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    return await this.prisma.mutation.updatePublication(args, info);
  }
}
