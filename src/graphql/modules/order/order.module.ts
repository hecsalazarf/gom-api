import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { PrismaModule } from '../../../db/prisma/prisma.module';

@Module({
  providers: [OrderResolver],
  imports: [PrismaModule],
})
export class OrderModule {}
