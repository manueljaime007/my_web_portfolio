// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const server = express();
const adapter = new ExpressAdapter(server);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, adapter);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  // Configuração do Swagger
  
  const config = new DocumentBuilder()
    .setTitle('Meu Portfólio Web - API')
    .setDescription('Documentação da API do portfólio profissional do Manuel Jaime')
    .setVersion('1.0')
    .addTag('projects')
    .addTag('contacts')
    .addTag('experiences')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  await app.init();

  return server; // Retorna o Express server
}

export default bootstrap();
