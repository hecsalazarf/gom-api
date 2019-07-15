
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
// import { RecipesService } from './recipes.service';

@Module({
  providers: [UserResolver],
})
export class UserModule {}
