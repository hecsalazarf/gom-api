import { OrderWhereInput, BpWhereInput } from '../prisma.binding';
import { PrismaService } from '../prisma.service';

/**
 * Custom implementation of Prisma existence check since the one provided by
 * Prisma binding has a bug as of version 2.3.15 when using a custom ID field.
 * The issue is well-explained in https://github.com/prisma/prisma-binding/issues/275
 */
export class Exists {
  private readonly prisma: PrismaService;
  constructor(prismaInstance: PrismaService) {
    this.prisma = prismaInstance;
  }

  public async Order(where: OrderWhereInput): Promise<boolean> {
    const res = await this.prisma.query.orders({
      where,
      first: 1, // we only need one
    }, '{ uid }'); // no data needed

    return res.length > 0; // true if order exists
  }

  public async Bp(where: BpWhereInput): Promise<boolean> {
    const res = await this.prisma.query.bps({
      where,
      first: 1, // we only need one
    }, '{ uid }'); // no data needed
    return res.length > 0; // true if bp exists
  }
}
