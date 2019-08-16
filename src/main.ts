import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks(); // Starts listening to shutdown hooks
  app.use(helmet()); // Helmet middlewares
  // @ts-ignore
  app.set('trust proxy', true);
  await app.listen(3000);
}
bootstrap();
