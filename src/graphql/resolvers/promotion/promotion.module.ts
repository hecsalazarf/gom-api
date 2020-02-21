import { Module } from '@nestjs/common';
import { PromoResolver } from './promotion.resolver';
import { PublicationResolver } from './publication.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';

@Module({
  providers: [PromoResolver, PublicationResolver],
  imports: [PrismaModule]
})
export class PromotionModule { }
