import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Bp as BpModel } from '../../../graphql.schema';

export class Bp extends BpModel {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name1: string;
}
