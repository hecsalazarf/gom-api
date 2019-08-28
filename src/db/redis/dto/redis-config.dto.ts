import { IsString, IsPositive, Max } from 'class-validator';

export class RedisConfigDto {
  @IsPositive()
  readonly port: number;

  @IsString()
  readonly host: string;

  @IsPositive()
  @Max(15)
  readonly db: number;
}
