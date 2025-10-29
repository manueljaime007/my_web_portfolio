import serverless from 'serverless-http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const server = express();
const adapter = new ExpressAdapter(server);

let initialized = false;

const initApp = async () => {
  if (!initialized) {
    const app = await NestFactory.create(AppModule, adapter);
    app.setGlobalPrefix('api/v1');
    app.enableCors();

    // Swagger
    const config = new DocumentBuilder()
      .setTitle('Meu Portfólio Web - API')
      .setDescription(
        'Documentação da API do portfólio profissional do Manuel Jaime',
      )
      .setVersion('1.0')
      .addTag('projects')
      .addTag('contacts')
      .addTag('experiences')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/v1/docs', app, document);

    await app.init();
    initialized = true;
  }
};

const handler = async (req: any, res: any) => {
  await initApp();
  return serverless(server)(req, res);
};

export default handler;
