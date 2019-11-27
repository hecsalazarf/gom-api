import { IsBoolean, IsPositive, IsOptional, IsIn } from 'class-validator';

export class CookieConfigDto {
  @IsOptional()
  @IsPositive()
  readonly maxAge: number;

  @IsOptional()
  @IsBoolean()
  readonly httpOnly?: boolean;

  @IsOptional()
  @IsIn([ true, false, 'Strict', 'Lax' ])
  readonly sameSite: boolean | string;

  @IsOptional()
  @IsBoolean()
  readonly secure: boolean;
}
