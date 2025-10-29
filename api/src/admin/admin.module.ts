import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaService, prisma } from 'src/database/prisma.service';

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
    {
      provide: PrismaService,
      useValue: prisma, // usa o singleton global
    },
  ],
})
export class AdminModule {}
