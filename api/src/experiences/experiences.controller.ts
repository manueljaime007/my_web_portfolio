import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { Prisma } from '@prisma/client';

@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Post()
  async create(@Body() data: Prisma.ExperienceCreateInput) {
    return this.experiencesService.create(data);
  }

  @Get()
  async findAll() {
    return this.experiencesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.experiencesService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.ContactMessageUpdateInput,
  ) {
    return this.experiencesService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.experiencesService.remove(Number(id));
  }
}
