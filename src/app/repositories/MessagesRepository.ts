import { Message } from '../entities/Message';

export class MessageFindFirstArgs {
  where: { id: string };
}

export class MessageCreateArgs {
  data: Message;
}
export class MessageUpdateArgs {
  where: { id: string };
  data: Message;
}

export abstract class MessagesRepository {
  abstract findFirst(args: MessageFindFirstArgs): Promise<Message | null>;
  abstract create(args: MessageCreateArgs): Promise<void>;
  abstract update(args: MessageUpdateArgs): Promise<void>;
}
