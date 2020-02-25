import { Module } from '@nestjs/common';
import { PromoResolver } from './promotion.resolver';
import { PublicationResolver } from './publication.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';
import { PublicationService } from './publication.service';
import { MqModule } from '../../../mq/mq.module';
import { WebPushModule } from '../../../web-push/web-push.module';

@Module({
  providers: [PromoResolver, PublicationResolver, PublicationService],
  imports: [PrismaModule, MqModule, WebPushModule]
})
export class PromotionModule { }
