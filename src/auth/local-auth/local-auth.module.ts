import { Module } from '@nestjs/common';
import { LocalAuthService } from './local-auth.service';
import { ConfigService } from '../../config/config.service';
import { LocalAuthConfigDto } from './dto';
import { PrismaModule } from '../../db/prisma/prisma.module';
import { PrismaService } from '../../db/prisma/prisma.service';

const LocalAuthServiceFactory = {
  provide: LocalAuthService,
  useFactory: async (config: ConfigService, prisma: PrismaService) => {
    const res = await config.validate('auth.local', LocalAuthConfigDto);
    return new LocalAuthService(res, prisma);
  },
  inject: [ConfigService, PrismaService],
};
@Module({
  imports: [PrismaModule],
  providers: [LocalAuthServiceFactory],
  exports: [LocalAuthServiceFactory],
})
export class LocalAuthModule {}
