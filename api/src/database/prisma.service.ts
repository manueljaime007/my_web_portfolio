// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../src/generated/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaService | undefined;
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['query'], // opcional, ajuda no debug
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

// Singleton global para serverless
export const prisma =
  global.prisma ||
  new PrismaService();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
