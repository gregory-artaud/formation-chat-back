import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static async forRootAsync(): Promise<DynamicModule> {
    return {
      module: AppModule,
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}
