import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

export async function bootstrap(isServerless = false): Promise<any> {
  const server = express();
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

  if (!isServerless) {
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`🚀 Server running at: http://localhost:${PORT}/api/v1`);
  }

  await app.init();
  return server;
}

if (require.main === module) {
  bootstrap();
}
