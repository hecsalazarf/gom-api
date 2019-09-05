import { IsString, IsPositive, Max, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class RedisConfigDto {
  @IsInt()
  @IsPositive()
  @Type(() => Number) // convert string to number
  readonly port: number;

  @IsString()
  readonly host: string;

  @IsInt()
  @IsPositive()
  @Max(15)
  readonly db: number;
}
