import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks(); // Starts listening to shutdown hooks
  // @ts-ignore
  app.disable('x-powered-by');
  // @ts-ignore
  app.enable('trust proxy');
  await app.listen(3000);
}
bootstrap();
