import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { RedisService } from '../redis.service';

@Injectable()
export class OnRedisDestroy implements OnModuleDestroy {
  private readonly logger: Logger = new Logger(OnRedisDestroy.name);

  constructor(private readonly redis: RedisService) {}

  // app.enableShutdownHooks() must have been called to enable this hook
  async onModuleDestroy() {
    await this.redis.quit(); // disconnect redis gracefully
    this.logger.log('Redis gracefully disconnected');
  }
}
