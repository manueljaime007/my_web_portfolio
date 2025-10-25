import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService){}

    async fincAll(){
        return this.prisma.admin.findMany();
    }
}
