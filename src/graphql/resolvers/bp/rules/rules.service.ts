import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../db/prisma/prisma.service';
import { ActiveStatus } from '../../order/constants';

@Injectable()
export class BpRulesService {
  constructor(private readonly prisma: PrismaService) {}

  public async hasActiveOrders(bp: string): Promise<boolean> {
    // we would use the built-in prisma.exists method, but it has a bug
    // https://github.com/prisma/prisma-binding/issues/215
    const orders = await this.prisma.query.orders({
      where: {
        issuedTo: {
          uid: bp,
        },
      stage_in: ActiveStatus,
      },
      first: 1, // we only need one
    }, '{ uid }'); // no data needed
    if (orders.length > 0) {
      return true;
    }
    return false; // no active orders
  }
}
