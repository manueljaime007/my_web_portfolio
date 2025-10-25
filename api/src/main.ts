import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(`Server running at: http://localhost:${PORT}/api/v1`);
}
bootstrap();
