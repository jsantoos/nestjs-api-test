// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, welcome to the NestJS app!';
  }

  @Get('test')
  getTest(): string {
    return 'This is a test route!';
  }
}
