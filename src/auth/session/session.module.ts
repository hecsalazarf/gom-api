import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { ConfigService } from '../../config/config.service';
import { RedisService } from '../../db/redis/redis.service';
import { RedisModule } from '../../db/redis/redis.module';
import { SessionConfigDto } from './dto';

const SessionServiceFactory = {
  provide: SessionService,
  useFactory: async (config: ConfigService, redis: RedisService) => {
    const res: SessionConfigDto = await config.validate('session', SessionConfigDto);
    const redisInstance = await redis.createInstance('session', res.redis);
    return new SessionService(redisInstance, config.get('keys'), res);
  },
  inject: [ConfigService, RedisService],
};
@Module({
  imports: [RedisModule],
  providers: [SessionServiceFactory],
  exports: [SessionServiceFactory],
})
export class SessionModule {}
