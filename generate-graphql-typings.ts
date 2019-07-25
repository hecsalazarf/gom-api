import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

/*
* Script that generates type definitions from GraphQL schema.
* To run: npx ts-node generate-graphql-typings
*/

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/graphql/modules/prisma/*.graphql'],
  path: join(process.cwd(), 'src/graphql/graphql.schema.d.ts'),
  outputAs: 'class',
});
