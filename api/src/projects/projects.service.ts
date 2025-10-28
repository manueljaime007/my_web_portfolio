import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client'; // ✅
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({ data });
  }

  async findAll() {
    return this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  async findAllUniqueTags(): Promise<string[]> {
    const projects = await this.prisma.project.findMany({
      select: { tags: true },
    });

    const allTags = projects.flatMap((project) => project.tags);
    const uniqueTags = Array.from(new Set(allTags));

    return uniqueTags;
  }

  async update(id: number, data: Prisma.ProjectUpdateInput) {
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}
