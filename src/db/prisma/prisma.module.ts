import { Module } from '@nestjs/common';
import * as assert from 'assert';
import { PrismaService } from './prisma.service';
import { ConfigService } from '../../config/config.service';

const PRISMA_ENDPOINT = 'prisma.endpoint';
const PRISMA_SECRET = 'prisma.secret';

const PrismaFactory = {
  provide: PrismaService,
  useFactory: async (config: ConfigService) => {
    const errorMessage = 'Missing prisma configuration';
    assert(config.has(PRISMA_ENDPOINT), `${errorMessage}: endpoint`);
    assert(config.has(PRISMA_SECRET), `${errorMessage}: secret`);
    return new PrismaService(config.get(PRISMA_ENDPOINT), config.get(PRISMA_SECRET));
  },
  inject: [ConfigService],
};

@Module({
  providers: [PrismaFactory],
  exports: [PrismaFactory],
})
export class PrismaModule {}
