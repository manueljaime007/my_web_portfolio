// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';
import serverless from 'serverless-http';

const server = express();
let isNestInitialized = false;

// Função para inicializar o Nest apenas uma vez
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // Prefixo global e CORS
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  // Swagger
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
  isNestInitialized = true;
};

// Exporta o handler para Vercel
export const handler = serverless(async (req: Request, res: Response) => {
  if (!isNestInitialized) {
    try {
      await bootstrap(); // Inicializa na primeira requisição
    } catch (err) {
      console.error('Erro ao inicializar Nest:', err);
      res.status(500).send('Erro interno na API');
      return;
    }
  }

  return server(req, res);
});
