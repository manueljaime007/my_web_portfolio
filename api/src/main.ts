import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  // IMPLEMENTANDO SWAGGER <--

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
  // IMPLEMENTANDO SWAGGER  -->

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(`Server running at: http://localhost:${PORT}/api/v1`);
}
bootstrap();

