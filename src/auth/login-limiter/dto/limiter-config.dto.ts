import { IRateLimiterOptions } from 'rate-limiter-flexible';
import { IsPositive } from 'class-validator';

export class LimiterConfigDto implements IRateLimiterOptions {
  @IsPositive()
  readonly points: number;

  @IsPositive()
  readonly duration: number;

  @IsPositive()
  readonly blockDuration: number;
}
