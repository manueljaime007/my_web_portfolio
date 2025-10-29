import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  // Se usar Swagger, inicializar aqui
  // const config = new DocumentBuilder()
  //   .setTitle('Meu Portfólio Web - API')
  //   .setDescription('Documentação da API')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/v1/docs', app, document);

  await app.init();
}

bootstrap().catch(console.error);

// exportação serverless compatível
export const handler = serverless(server);
