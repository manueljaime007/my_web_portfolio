import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix("api/v1");
  app.enableCors();
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


// export interface Experience {
//   id: string;
//   title: string;
//   company: string;
//   period: string;
//   description: string;
//   fullDescription?: string;
//   responsibilities?: string[];
//   technologies?: string[];

//   projects?: { name: string; description: string; link?: string }[];

//   image?: string;
//   link?: string;
// }