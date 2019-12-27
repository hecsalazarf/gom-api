import { Module } from '@nestjs/common';
import { PromoResolver } from './promotion.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';

@Module({
  providers: [PromoResolver],
  imports: [PrismaModule]
})
export class PromotionModule { }
