import { Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { LoginLimiterService } from './login-limiter.service';
import { ConfigService } from '../../config/config.service';
import { RedisModule } from '../../db/redis/redis.module';
import { RedisService } from '../../db/redis/redis.service';
import { LoginLimiterConfigDto } from './dto';

const LoginLimiterServiceFactory = {
  provide: LoginLimiterService,
  useFactory: async (config: ConfigService, redis: RedisService): Promise<LoginLimiterService> => {
    const res: LoginLimiterConfigDto = await config.validate('auth.login-limiter', LoginLimiterConfigDto);
    const options: RedisOptions = {
      ...res.redis,
      enableOfflineQueue: false,
    };
    const redisInstance = await redis.createInstance('login-limiter', options);
    return new LoginLimiterService(redisInstance, res);
  },
  inject: [ConfigService, RedisService],
};

@Module({
  imports: [RedisModule],
  providers: [LoginLimiterServiceFactory],
  exports: [LoginLimiterServiceFactory],
})
export class LoginLimiterModule {}
