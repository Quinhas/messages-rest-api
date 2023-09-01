import { Module } from '@nestjs/common';
import { CreateMessageUseCase } from 'src/app/use-cases/messages/create-message/create-message.use-case';
import { GetMessageByIdUseCase } from 'src/app/use-cases/messages/get-message-by-id/get-message-by-id.use-case';
import { UpdateMessageUseCase } from 'src/app/use-cases/messages/update-message/update-message.use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { MessagesController } from './messages.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagesController],
  providers: [
    CreateMessageUseCase,
    GetMessageByIdUseCase,
    UpdateMessageUseCase,
  ],
  exports: [],
})
export class MessagesModule {}
