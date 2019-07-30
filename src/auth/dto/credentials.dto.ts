import { IsNotEmpty, IsString, IsIn, ValidateIf, Length } from 'class-validator';

export const PASSWORD_GTYPE = 'password';
export const PHONE_GTYPE = 'phone';
export const PHONE_LENGTH = 10;

export class CredentialsDto {
  @IsNotEmpty()
  @IsString()
  @IsIn([
    PASSWORD_GTYPE,
    PHONE_GTYPE,
  ], {
    message: 'grantType must be a valid value',
  })
  readonly grantType: string;

  @ValidateIf(o => o.grantType === PASSWORD_GTYPE)
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ValidateIf(o => o.grantType === PASSWORD_GTYPE)
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ValidateIf(o => o.grantType === PHONE_GTYPE)
  @IsNotEmpty()
  @IsString()
  @Length(PHONE_LENGTH, PHONE_LENGTH)
  readonly phone: string;
}
