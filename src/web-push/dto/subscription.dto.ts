import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PushSubscription } from 'web-push';
import { KeysDto } from './keys.dto';

export class SubscriptionDto implements PushSubscription {
  @IsNotEmpty()
  @IsString()
  readonly endpoint: string;

  @ValidateNested()
  // When you are trying to transform objects that have nested objects, its required
  // to known what type of object you are trying to transform. Since Typescript does
  // not have good reflection abilities yet, we should implicitly specify what type of
  // object each property contain. This is done using @Type decorator.
  @Type(() => KeysDto)
  readonly keys: KeysDto;
}
