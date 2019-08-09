import { Module } from '@nestjs/common';
import { OnRedisDestroy } from './hooks/ondestroy.hook';
import { RedisService } from './redis.service';

@Module({
  providers: [RedisService, OnRedisDestroy],
  exports: [RedisService],
})
export class RedisModule {}
