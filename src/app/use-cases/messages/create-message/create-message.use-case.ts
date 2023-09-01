import { Injectable } from '@nestjs/common';
import { Message } from 'src/app/entities/Message';
import { MessagesRepository } from 'src/app/repositories/MessagesRepository';
import { generateUUID } from 'src/app/utils/generate-uuid';

interface CreateMessageUseCaseRequest {
  author: string;
  content: string;
}

@Injectable()
export class CreateMessageUseCase {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async execute({
    author,
    content,
  }: CreateMessageUseCaseRequest): Promise<Message> {
    const message: Message = {
      id: generateUUID(),
      author,
      content,
    };

    await this.messagesRepository.create({ data: message });

    return message;
  }
}
