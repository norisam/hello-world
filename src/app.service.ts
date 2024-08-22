import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPersonalizedHello(name: string): string {
    return `Hello, ${name}!`;
  }
}
