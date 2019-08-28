import { ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { RedisConfigDto } from '../../../db/redis/dto';

export class LoginLimiterConfigDto {

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RedisConfigDto)
  readonly redis: RedisConfigDto;
}
