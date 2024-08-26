import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greet')
  getGreeting(
    @Query('name') name: string = 'World',
    @Query('language') language: 'en' | 'tr' | 'es' | 'fr' | 'de' = 'en',
    @Query('color') color: string = '#FFFFFF'
  ): string {
    return this.appService.getPersonalizedHello(name, language, color);
  }
}
