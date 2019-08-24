import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { Exists } from './customs/exists';

@Injectable()
export class PrismaService extends Prisma {
  public readonly cexists: Exists; // custom exists
  constructor(endpoint: string, secret: string) {
    super({ endpoint, secret });
    this.cexists = new Exists(this);
  }
}
