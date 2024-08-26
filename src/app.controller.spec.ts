import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('getGreeting', () => {
    it('should return a personalized greeting with default parameters', () => {
      const name = 'World';
      const language = 'en';
      const color = '#FFFFFF';

      const expectedGreeting = `<div style="background-color:${color}; padding: 20px;">Hello, ${name}!</div>`;

      jest.spyOn(appService, 'getPersonalizedHello').mockReturnValue(expectedGreeting);

      expect(appController.getGreeting(name, language, color)).toBe(expectedGreeting);
    });

    it('should return a personalized greeting with custom parameters', () => {
      const name = 'John';
      const language = 'es';
      const color = '#FF5733';

      const expectedGreeting = `<div style="background-color:${color}; padding: 20px;">¡Hola, ${name}!</div>`;

      jest.spyOn(appService, 'getPersonalizedHello').mockReturnValue(expectedGreeting);

      expect(appController.getGreeting(name, language, color)).toBe(expectedGreeting);
    });
  });
});
