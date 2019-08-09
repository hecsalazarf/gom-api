import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { RedisService } from '../redis.service';

@Injectable()
export class OnRedisDestroy implements OnModuleDestroy {
  private readonly logger: Logger = new Logger(OnRedisDestroy.name);

  constructor(private readonly redis: RedisService) {}

  // app.enableShutdownHooks() must have been called to enable this hook
  async onModuleDestroy() {
    const instances = this.redis.getAllInstances();
    const promises = [];
    instances.forEach((value, key) => {
      this.logger.log(`Disconnecting ${key} redis instance...`);
      promises.push(value.quit()); // disconnect redis gracefully
    });
    await Promise.all(promises);
  }
}
