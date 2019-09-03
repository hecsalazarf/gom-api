import { IsNotEmpty, IsString } from 'class-validator';

export class Auth0ConfigDto {
  @IsNotEmpty()
  @IsString()
  readonly tokenUrl: string;

  @IsNotEmpty()
  @IsString()
  readonly issuer: string;

  @IsNotEmpty()
  @IsString()
  readonly clientId: string;

  @IsNotEmpty()
  @IsString()
  readonly clientSecret: string;

  @IsNotEmpty()
  @IsString()
  readonly audience: string;

  @IsNotEmpty()
  @IsString()
  readonly scope: string;

  @IsNotEmpty()
  @IsString()
  readonly jwksEndpoint: string;
}
