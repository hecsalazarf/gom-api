import { Module } from '@nestjs/common';
import { BpRulesService } from './rules.service';
import { PrismaModule } from '../../../../db/prisma/prisma.module';

@Module({
  providers: [BpRulesService],
  imports: [PrismaModule],
  exports: [BpRulesService],
})
export class BpRulesModule {}
