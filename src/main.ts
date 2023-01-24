import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEvironmentOptions } from './utils/environment/environment.util';

(async () => {
  try {
    const { APP_PORT } = getEvironmentOptions();
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('physiodocs-service');
    app.enableCors();
    await app.listen(APP_PORT);
    console.log('app is listening to port',APP_PORT);
  } catch (error) {
    throw new Error(error);
  }
})();
