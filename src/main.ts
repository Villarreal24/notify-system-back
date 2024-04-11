import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { config } from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  dotenv.config({
    path: join(__dirname, './.env'),
  });
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // ENABLED REQUEST FROM THIS ORIGIN
  });
  await app.listen(3000);
}
bootstrap();
