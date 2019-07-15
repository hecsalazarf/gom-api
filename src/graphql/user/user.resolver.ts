import { Args, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { User } from './models/user';

@Resolver(of => User)
export class UserResolver {
  // constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = id;
    if (!user) {
      throw new NotFoundException(id);
    }
    return {
      id,
      user: 'User1',
    };
  }
}
