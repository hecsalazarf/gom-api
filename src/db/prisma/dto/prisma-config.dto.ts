import { IsString } from 'class-validator';

export class PrismaConfigDto {
  @IsString()
  readonly endpoint: string;

  @IsString()
  readonly secret: string;
}
