import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import * as path from 'path';

const configFactory = {
  provide: ConfigService,
  useFactory: async () => {
    process.env.NODE_CONFIG_DIR = process.cwd() + '/config';
    const config = await import('config');
    return new ConfigService(config);
  },
};

@Module({
  providers: [configFactory],
  exports: [configFactory],
})
export class ConfigModule {}
