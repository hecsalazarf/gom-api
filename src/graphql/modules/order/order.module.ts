import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';
import { OrderNotification } from './order.notification';
import { WebPushModule } from '../../../web-push/web-push.module';

@Module({
  providers: [OrderResolver, OrderNotification],
  imports: [PrismaModule, WebPushModule],
})
export class OrderModule {}
