import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Order as OrderModel } from '../../graphql.schema';

export class Order extends OrderModel {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
}
