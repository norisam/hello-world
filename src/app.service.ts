import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPersonalizedHello(name: string, language: 'en' | 'tr' | 'es' | 'fr' | 'de' = 'en', color: string = '#FFFFFF'): string {
    let greeting: string;

    if (language === 'tr') {
      greeting = 'Merhaba, ${name}!';
    } else if (language === 'es') {
      greeting = '¡Hola, ${name}!';
    } else if (language === 'fr') {
      greeting = 'Bonjour, ${name}!';
    } else if (language === 'de') {
      greeting = 'Hallo, ${name}!';
    } else {
      greeting = 'Hello, ${name}!';
    }

    return '<div style="background-color:${color}; padding: 20px;">${greeting}</div>';
  }
}
