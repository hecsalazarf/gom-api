import { IsNotEmpty, IsString, IsIn, ValidateIf, Length } from 'class-validator';

export const PHONE_LENGTH = 10;

export enum GrantTypes {
  PASSWORD = 'password',
  PHONE = 'phone',
}

export class CredentialsDto {
  @IsNotEmpty()
  @IsString()
  @IsIn([
    GrantTypes.PASSWORD,
    GrantTypes.PHONE,
  ], {
    message: 'grantType must be a valid value',
  })
  readonly grantType: GrantTypes;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ValidateIf(o => o.grantType === GrantTypes.PASSWORD)
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ValidateIf(o => o.grantType === GrantTypes.PHONE)
  @IsNotEmpty()
  @IsString()
  @Length(PHONE_LENGTH, PHONE_LENGTH)
  readonly phone: string;
}
