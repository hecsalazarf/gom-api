import { Module } from '@nestjs/common';
import { BpResolver } from './bp.resolver';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  providers: [BpResolver],
  imports: [PrismaModule],
})
export class BpModule {}
