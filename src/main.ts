import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks(); // Starts listening to shutdown hooks
  // @ts-ignore: Nest does not provide types
  app.disable('x-powered-by');
  // @ts-ignore: Nest does not provide types
  app.enable('trust proxy');
  await app.listen(3000);
}
void bootstrap();
