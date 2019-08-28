import { ValidateNested, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CookieConfigDto } from './cookie-config.dto';

export class CsrfConfigDto {
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CookieConfigDto)
  readonly options: CookieConfigDto;
}
