import { Module } from '@nestjs/common';
import { MessagesRepository } from 'src/app/repositories/MessagesRepository';
import { InMemoryMessagesRepository } from './in-memory/repositories/in-memory-messages.repository';

@Module({
  providers: [
    { provide: MessagesRepository, useClass: InMemoryMessagesRepository },
  ],
  exports: [MessagesRepository],
})
export class DatabaseModule {}
