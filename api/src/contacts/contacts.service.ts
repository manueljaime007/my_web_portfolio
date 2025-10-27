import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ContactMessageCreateInput) {
    return this.prisma.contactMessage.create({ data });
  }

  async findAll() {
    return this.prisma.contactMessage.findMany();
  }

  async findOne(id: number) {
    return this.prisma.contactMessage.findUnique({ where: { id } });
  }
  
  async remove(id: number) {
    return this.prisma.contactMessage.delete({ where: { id } });
  }
}
