import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Message } from 'src/app/entities/Message';
import { MessagesRepository } from 'src/app/repositories/MessagesRepository';

interface GetMessageByIdUseCaseRequest {
  id: string;
}

@Injectable()
export class GetMessageByIdUseCase {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async execute({ id }: GetMessageByIdUseCaseRequest): Promise<Message> {
    const message = await this.messagesRepository.findFirst({ where: { id } });

    if (!message) {
      throw new HttpException('Message not found.', HttpStatus.NOT_FOUND);
    }

    return message;
  }
}
