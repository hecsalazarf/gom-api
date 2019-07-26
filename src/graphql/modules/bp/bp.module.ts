import { Module } from '@nestjs/common';
import { BpResolver } from './bp.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { UtilsModule } from '../../../utils/utils.module';

@Module({
  providers: [BpResolver],
  imports: [PrismaModule, UtilsModule],
})
export class BpModule {}
