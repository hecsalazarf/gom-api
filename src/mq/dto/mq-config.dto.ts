import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { RedisConfigDto } from '../../db/redis/dto';

export class MqConfigDto{
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RedisConfigDto)
  readonly redis: RedisConfigDto;
}
