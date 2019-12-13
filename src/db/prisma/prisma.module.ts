import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigService } from '../../config/config.service';
import { PrismaConfigDto } from './dto';

const PrismaFactory = {
  provide: PrismaService,
  useFactory: async (config: ConfigService): Promise<PrismaService> => {
    const res: PrismaConfigDto = await config.validate('prisma', PrismaConfigDto);
    return new PrismaService(res.endpoint, res.secret);
  },
  inject: [ConfigService],
};

@Module({
  providers: [PrismaFactory],
  exports: [PrismaFactory],
})
export class PrismaModule {}
