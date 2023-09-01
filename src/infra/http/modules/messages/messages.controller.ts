import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMessageUseCase } from 'src/app/use-cases/messages/create-message/create-message.use-case';
import { GetMessageByIdUseCase } from 'src/app/use-cases/messages/get-message-by-id/get-message-by-id.use-case';
import { UpdateMessageUseCase } from 'src/app/use-cases/messages/update-message/update-message.use-case';
import { CreateMessageDto } from './dtos/create-message.dto';
import { UpdateMessageDto } from './dtos/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly getMessageById: GetMessageByIdUseCase,
    private readonly createMessage: CreateMessageUseCase,
    private readonly updateMessage: UpdateMessageUseCase,
  ) {}

  @Get('/:messageId')
  async findById(@Param('messageId') messageId: string) {
    const message = await this.getMessageById.execute({
      id: messageId,
    });

    return message;
  }

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
    const { author, content } = createMessageDto;

    const message = await this.createMessage.execute({
      author,
      content,
    });

    return message;
  }

  @Put('/:messageId')
  async update(
    @Param('messageId') messageId: string,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    const { author, content } = updateMessageDto;

    const message = await this.updateMessage.execute({
      id: messageId,
      data: {
        author,
        content,
      },
    });

    return message;
  }
}
