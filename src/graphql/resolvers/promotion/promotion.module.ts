import { Module } from '@nestjs/common';
import { PromoResolver } from './promotion.resolver';
import { PublicationResolver } from './publication.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';
import { PublicationService } from './publication.service';
import { MqModule } from '../../../mq/mq.module';
import { WebPushModule } from '../../../web-push/web-push.module';
import { PublicationRules } from './rules/publication.rules';

@Module({
  providers: [
    PromoResolver,
    PublicationResolver,
    PublicationService,
    PublicationRules],
  imports: [PrismaModule, MqModule, WebPushModule]
})
export class PromotionModule { }
