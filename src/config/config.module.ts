import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import config from 'config';

const configFactory = {
  provide: ConfigService,
  useFactory: async () => {
    process.env.NODE_CONFIG_DIR = process.cwd() + '/config';
    return new ConfigService(config);
  },
};

@Global()
@Module({
  providers: [configFactory],
  exports: [configFactory],
})
export class ConfigModule {}
