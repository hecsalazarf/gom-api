import { IsString } from 'class-validator';

export class LocalAuthConfigDto {
  @IsString()
  readonly issuer: string;

  @IsString()
  readonly audience: string;
}
