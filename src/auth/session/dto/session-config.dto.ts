import { ValidateNested, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { RedisConfigDto } from '../../../db/redis/dto';
import { CookieConfigDto } from '../../dto';

export class SessionConfigDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly secret: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RedisConfigDto)
  readonly redis: RedisConfigDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CookieConfigDto)
  readonly options: CookieConfigDto;
}
