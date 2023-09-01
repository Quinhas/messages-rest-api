import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Message } from 'src/app/entities/Message';
import { MessagesRepository } from 'src/app/repositories/MessagesRepository';

interface UpdateMessageUseCaseRequest {
  id: string;
  data: {
    author: string;
    content: string;
  };
}

@Injectable()
export class UpdateMessageUseCase {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async execute({ id, data }: UpdateMessageUseCaseRequest): Promise<Message> {
    const message = await this.messagesRepository.findFirst({ where: { id } });

    if (!message) {
      throw new HttpException('Message not found.', HttpStatus.NOT_FOUND);
    }

    const updatedMessage: Message = {
      ...message,
      ...data,
      id,
    };

    await this.messagesRepository.update({
      where: {
        id,
      },
      data: updatedMessage,
    });

    return updatedMessage;
  }
}
