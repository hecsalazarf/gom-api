import { ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { RedisConfigDto } from '../../db/redis/dto';
import { VapidDto } from './vapid.dto';

export class WebpushConfigDto {

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RedisConfigDto)
  readonly redis: RedisConfigDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VapidDto)
  readonly vapid: VapidDto;
}
