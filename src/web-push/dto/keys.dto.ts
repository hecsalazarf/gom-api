import { IsString, IsNotEmpty } from 'class-validator';

export class KeysDto {
  @IsNotEmpty()
  @IsString()
  readonly p256dh: string;

  @IsNotEmpty()
  @IsString()
  readonly auth: string;
}
