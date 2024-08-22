import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPersonalizedHello(name: string, language: string = 'en'): string {
    switch (language) {
      case 'tr':
        return `Merhaba, ${name}!`;
      case 'es':
        return `¡Hola, ${name}!`;
      case 'fr':
        return `Bonjour, ${name}!`;
      case 'de':
        return `Hallo, ${name}!`;
      default:
        return `Hello, ${name}!`;
    }
  }
}
