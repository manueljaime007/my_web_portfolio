import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import express, { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverless from 'serverless-http';

const server: Express = express();

// Marcar se o app já foi inicializado
let nestAppPromise: Promise<any> | null = null;

export const handler = async (req: any, res: any) => {
  if (!nestAppPromise) {
    nestAppPromise = (async () => {
      const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
      app.setGlobalPrefix('api/v1');
      app.enableCors();

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

      return app;
    })();
  }

  await nestAppPromise; // garante que o Nest está pronto
  return serverless(server)(req, res);
};
