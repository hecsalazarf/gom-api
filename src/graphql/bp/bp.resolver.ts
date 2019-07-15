import { Args, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Bp } from './models/bp';

@Resolver(of => Bp)
export class BpResolver {
  // constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => Bp)
  async bp(@Args('id') id: string): Promise<Bp> {
    const bp = id;
    if (!bp) {
      throw new NotFoundException(id);
    }
    return {
      id,
      name: 'Paco',
    };
  }
}
