import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ExperiencesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ExperienceCreateInput) {
    return this.prisma.experience.create({ data });
  }

  async findAll() {
    return this.prisma.experience.findMany({
      include: {
        projects: true,
        _count: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.experience.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.ExperienceUpdateInput) {
    return this.prisma.experience.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.experience.delete({ where: { id } });
  }
}
