import { ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { RedisConfigDto } from '../../db/redis/dto';

export class WebpushConfigDto {

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RedisConfigDto)
  readonly redis: RedisConfigDto;
}
