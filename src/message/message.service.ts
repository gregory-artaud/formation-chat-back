import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { SaveMessageDto } from './dtos/save.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prismaService: PrismaService) {}

  // Used by the GET /message route
  async getAll() {
    return this.prismaService.message.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  // Used by the websocket
  async save({ author, content }: SaveMessageDto) {
    return this.prismaService.message.create({
      data: {
        content,
        author,
      },
    });
  }
}
