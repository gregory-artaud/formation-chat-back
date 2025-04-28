import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { MessageService } from './message.service';
import { SaveMessageDto } from './dtos/save.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessageGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('MessageGateway');

  constructor(private readonly messageService: MessageService) {}

  afterInit(_server: any) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('newMessage')
  async handleMessage(
    @MessageBody() data: SaveMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    this.logger.log(
      `Message received from ${client.id}: ${JSON.stringify(data)}`,
    );
  }
}
