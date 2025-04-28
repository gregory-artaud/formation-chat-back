import { IsNotEmpty, IsString } from 'class-validator';

export class SaveMessageDto {
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
