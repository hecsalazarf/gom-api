import { Module } from '@nestjs/common';
import { MqService } from './mq.service';
import { RedisModule } from '../db/redis/redis.module';
import { RedisService } from '../db/redis/redis.service';
import { ConfigService } from '../config/config.service';
import { MqConfigDto } from './dto';

const MqFactory = {
  provide: MqService,
  useFactory: async (config: ConfigService, redis: RedisService): Promise<MqService> => {
    const mqConfig: MqConfigDto = await config.validate('mq', MqConfigDto);
    return new MqService(mqConfig, redis);
  },
  inject: [ConfigService, RedisService],
};


@Module({
  imports: [RedisModule],
  providers: [MqFactory],
  exports: [MqFactory]
})
export class MqModule {}
