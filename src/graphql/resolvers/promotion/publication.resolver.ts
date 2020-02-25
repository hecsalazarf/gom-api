import { Resolver, Mutation, Args, Info, Query } from '@nestjs/graphql';
import { UseFilters, UseInterceptors } from '@nestjs/common';
import { GraphqlFilter } from '../../filters';
import { PrismaService } from '../../../db/prisma/prisma.service';
import { Publication } from './model/publication';
import { AuditInterceptor } from '../../interceptors';
import { PublicationConnection } from '../../graphql.schema';
import { PublicationService } from './publication.service';
import { ApolloError } from 'apollo-server-errors';

@Resolver('Publication')
@UseFilters(GraphqlFilter)
export class PublicationResolver {
  constructor(private readonly prisma: PrismaService, private readonly service: PublicationService) { }

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
  async updatePublication(@Args() args: any, @Info() info: any): Promise<Publication> {
    return await this.prisma.mutation.updatePublication(args, info);
  }
}
