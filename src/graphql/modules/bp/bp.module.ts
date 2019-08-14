import { Module } from '@nestjs/common';
import { BpResolver } from './bp.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';
import { UtilsModule } from '../../../utils/utils.module';
import { BpRulesModule } from './rules/rules.module';

@Module({
  providers: [BpResolver],
  imports: [PrismaModule, UtilsModule, BpRulesModule],
})
export class BpModule {}
