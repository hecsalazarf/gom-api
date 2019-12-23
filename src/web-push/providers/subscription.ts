import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { PushSubscription } from 'web-push';
import { Type } from 'class-transformer';

class SubKeys {
  @IsNotEmpty()
  @IsString()
  public p256dh: string;

  @IsNotEmpty()
  @IsString()
  public auth: string;
}

export class User {
  @IsNotEmpty()
  @IsString()
  public id: string;
}

export class Subscription implements PushSubscription {
  @IsNotEmpty()
  @IsString()
  public endpoint: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => SubKeys)
  private _keys: SubKeys;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => User)
  private _user: User;

  public get keys(): SubKeys {
    return this._keys;
  }

  public set keys(value: SubKeys) {
    if (!this._keys) {
      this._keys = new SubKeys();
    }
    this._keys.auth = value.auth;
    this._keys.p256dh = value.p256dh;
  }

  public get user(): User {
    if (!this._user) {
      this._user = new User();
    }
    return this._user;
  }

  public set user(value: User) {
    if (!this._user) {
      this._user = new User();
    }
    this._user.id = value.id;
  }
}
