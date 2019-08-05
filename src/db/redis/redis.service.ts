import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';
import { KeyType } from 'ioredis';

export interface RedisArgs {
  key: KeyType;
  data: any[];
}

@Injectable()
export class RedisService extends Redis {
}
