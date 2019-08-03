import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService extends Redis {}
