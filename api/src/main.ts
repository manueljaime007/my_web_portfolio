import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Express } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const server: Express = express();

export async function createNestApp(): Promise<Express> {
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

  await app.init(); // necessário para serverless
  return server;
}

// Se estiver rodando local
if (require.main === module) {
  createNestApp().then(app => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}/api/v1`));
  });
}
