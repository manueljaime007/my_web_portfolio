import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();
const adapter = new ExpressAdapter(server);

export async function createApp() {
  const app = await NestFactory.create(AppModule, adapter);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.init();
  return app;
}

export { server };
