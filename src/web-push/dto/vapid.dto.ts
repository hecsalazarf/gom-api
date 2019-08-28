import { IsNotEmpty, IsString } from 'class-validator';

export class VapidDto {
  @IsNotEmpty()
  @IsString()
  readonly subject: string;

  @IsNotEmpty()
  @IsString()
  readonly privateKey: string;

  @IsNotEmpty()
  @IsString()
  readonly publicKey: string;
}
