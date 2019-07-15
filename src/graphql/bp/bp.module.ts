
import { Module } from '@nestjs/common';
import { BpResolver } from './bp.resolver';
// import { RecipesService } from './recipes.service';

@Module({
  providers: [BpResolver],
})
export class BpModule {}
