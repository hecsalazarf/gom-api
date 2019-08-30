import { ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { RedisConfigDto } from '../../../db/redis/dto';
import { LimiterConfigDto } from './';

export class LoginLimiterConfigDto {

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RedisConfigDto)
  readonly redis: RedisConfigDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LimiterConfigDto)
  readonly slowBrute: LimiterConfigDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LimiterConfigDto)
  readonly consecutiveFails: LimiterConfigDto;
}
