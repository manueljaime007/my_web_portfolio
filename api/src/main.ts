import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

const server = express();
const adapter = new ExpressAdapter(server);

async function createApp() {
  const app = await NestFactory.create(AppModule, adapter);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.init();
  return app;
}

// Inicializa app sem chamar bootstrap()
createApp().catch(console.error);

export default serverless(server);
