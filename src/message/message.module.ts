import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { PrismaService } from '../shared/prisma/prisma.service';
import { MessageGateway } from './message.gateway';

@Module({
  controllers: [MessageController],
  providers: [MessageService, PrismaService, MessageGateway],
})
export class MessageModule {}
