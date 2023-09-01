import { Controller, Get, HttpCode } from '@nestjs/common';
import { apiUrl } from './main';

@Controller()
export class AppController {
  @Get('/')
  @HttpCode(200)
  async index() {
    return {
      links: [
        {
          href: `${apiUrl}/`,
          rel: 'self',
          method: 'GET',
        },
        {
          href: `${apiUrl}/messages`,
          rel: 'create message',
          method: 'POST',
        },
      ],
    };
  }
}
