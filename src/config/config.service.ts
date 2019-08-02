import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly config: any;

  constructor(configInstance: any) {
    this.config = configInstance;
  }

  public get(key: string): any {
    return this.config.get(key);
  }

  public has(key: string): any {
    return this.config.has(key);
  }
}
