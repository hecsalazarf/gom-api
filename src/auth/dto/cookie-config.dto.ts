import { IsBoolean, IsPositive, IsOptional } from 'class-validator';

export class CookieConfigDto {
  @IsOptional()
  @IsPositive()
  readonly maxAge: number;

  @IsOptional()
  @IsBoolean()
  readonly httpOnly?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly sameSite: boolean;

  @IsOptional()
  @IsBoolean()
  readonly secure: boolean;
}
