import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { RedisService } from '../redis.service';

@Injectable()
export class OnRedisDestroy implements OnModuleDestroy {
  private readonly logger: Logger = new Logger(OnRedisDestroy.name);

  constructor(private readonly redis: RedisService) {}

  // app.enableShutdownHooks() must have been called to enable this hook
  onModuleDestroy(): void {
    this.redis.getAllInstances().forEach((value, key) => {
      this.logger.log(`Disconnecting ${key} redis instance...`);
      value.disconnect(); // disconnect redis gracefully
    });
  }
}
