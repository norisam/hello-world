import { Controller, Get, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getHello(@Param('name') name: string, @Query('lang') lang: string): string {
    return this.appService.getPersonalizedHello(name, lang);
  }
}
