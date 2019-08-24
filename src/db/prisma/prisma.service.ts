import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import { Exists } from './customs/exists';

@Injectable()
export class PrismaService extends Prisma {
  public readonly cexists: Exists; // custom exists
  constructor() {
    super({
      endpoint: 'http://172.18.0.1:4466',
      secret: '12345',
    });
    this.cexists = new Exists(this);
  }
}
