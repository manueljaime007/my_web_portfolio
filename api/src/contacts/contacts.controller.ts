import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() data: Prisma.ContactMessageCreateInput) {
    return this.contactsService.create(data);
  }

  @Get()
  async findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.contactsService.findOne(Number(id));
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() data: Prisma.ContactMessageUpdateInput,
  // ) {
  //   return this.contactsService.update(Number(id), data);
  // }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.contactsService.remove(Number(id));
  }
}
