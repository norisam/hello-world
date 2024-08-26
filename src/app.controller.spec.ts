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

      jest.spyOn(appService, 'getPersonalizedHello').mockImplementation(() => {
        return `Hello ${name}! Your preferred language is ${language} and color is ${color}.`;
      });

      expect(appController.getGreeting(name, language, color)).toBe(
        `Hello ${name}! Your preferred language is ${language} and color is ${color}.`
      );
    });

    it('should return a personalized greeting with custom parameters', () => {
      const name = 'John';
      const language = 'es';
      const color = '#FF5733';

      jest.spyOn(appService, 'getPersonalizedHello').mockImplementation(() => {
        return `Hola ${name}! Your preferred language is ${language} and color is ${color}.`;
      });

      expect(appController.getGreeting(name, language, color)).toBe(
        `Hola ${name}! Your preferred language is ${language} and color is ${color}.`
      );
    });
  });
});

