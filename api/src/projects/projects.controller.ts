import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Prisma } from '@prisma/client';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll() {
    return this.projectsService.findAll();
  }

  @Post()
  async create(@Body() data: Prisma.ExperienceCreateInput) {
    return this.projectsService.create(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.projectsService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.ContactMessageUpdateInput,
  ) {
    return this.projectsService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.projectsService.remove(Number(id));
  }
}
