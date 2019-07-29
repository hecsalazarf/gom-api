import { IsNotEmpty, IsString } from 'class-validator';

export class BpQueryDto {
  @IsNotEmpty()
  @IsString()
  readonly code: string;
}
