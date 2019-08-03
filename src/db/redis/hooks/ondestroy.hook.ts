import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { RedisService } from '../redis.service';

@Injectable()
export class OnRedisDestroy implements OnModuleDestroy {
  constructor(private readonly redis: RedisService) {}

  // app.enableShutdownHooks() must have been called to enable this hook
  async onModuleDestroy() {
    await this.redis.quit(); // disconnect redis gracefully
  }
}
