import { Injectable } from '@nestjs/common';
import { Message } from 'src/app/entities/Message';
import {
  MessageCreateArgs,
  MessageFindFirstArgs,
  MessageUpdateArgs,
  MessagesRepository,
} from 'src/app/repositories/MessagesRepository';

const messages: Message[] = [];

@Injectable()
export class InMemoryMessagesRepository implements MessagesRepository {
  async findFirst({ where }: MessageFindFirstArgs) {
    const { id } = where;

    const message = messages.find((message) => message.id === id);

    if (!message) {
      return null;
    }

    return message;
  }

  async create({ data }: MessageCreateArgs) {
    await messages.push(data);
  }

  async update({ where, data }: MessageUpdateArgs) {
    const { id } = where;
    const messageIndex = messages.findIndex((message) => message.id === id);

    if (messageIndex === -1) {
      throw new Error('Message not found.');
    }

    messages[messageIndex] = data;
  }
}
