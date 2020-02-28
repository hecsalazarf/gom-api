import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../db/prisma/prisma.service';
import { PublicationCreateInput } from '../../../../graphql/graphql.schema';

enum RulesValues {
  MAX_PER_PROMO = 1
}

@Injectable()
export class PublicationRules {
  constructor(private readonly prisma: PrismaService){
  }
  public async hasCustomers(promotionUid: string): Promise<boolean> {
    const customers  = await this.prisma.query.bps({
      where: {
        customerOf_some: {
          promotions_some: {
            uid: promotionUid
          }
        }
      },
      first: 1
    }, '{ uid }');
    return customers.length > 0;
  }

  public async reachedLimit(data: PublicationCreateInput): Promise<boolean> {
    const publishDate = new Date(Date.now() + (data.delay || 0));
    const year = publishDate.getFullYear();
    const month = publishDate.getMonth();
    const day = publishDate.getDate();
    const range = { // onde-day range
      start: new Date(year, month, day),
      end: new Date(year, month, day, 23, 59, 59, 999) // one day
    };
    const publications = await this.prisma.query.publications({
      where: {
        promotion: {
          uid: data.promotion.connect.uid
        },
        status_in: ['DELIVERED', 'WAITING'],
        publishAt_gte: range.start,
        publishAt_lte: range.end,
      }
    }, '{ uid }');
    return !(publications.length < RulesValues.MAX_PER_PROMO);
  }
}
