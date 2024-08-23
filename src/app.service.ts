import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPersonalizedHello(name: string, language: string = 'en'): string {
    if (language === 'tr') {
      return `Merhaba, ${name}!`;
    } else if (language === 'es') {
      return `¡Hola, ${name}!`;
    } else if (language === 'fr') {
      return `Bonjour, ${name}!`;
    } else if (language === 'de') {
      return `Hallo, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
}