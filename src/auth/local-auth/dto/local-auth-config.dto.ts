import { IsString, IsPositive } from 'class-validator';

export class LocalAuthConfigDto {
  @IsString()
  readonly issuer: string;

  @IsString()
  readonly audience: string;

  @IsPositive()
  readonly expiration: number;

  @IsString()
  readonly secret: string;
}
