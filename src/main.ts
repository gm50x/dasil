import { EnvironmentService } from '@gm50x/environment';
import { AutoSwaggerService } from '@gm50x/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DasilModule } from './dasil.module';

async function bootstrap() {
  const app = await NestFactory.create(DasilModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
    }),
  );
  app.get(AutoSwaggerService).addSwagger(app);
  await app.listen(app.get(EnvironmentService).get('PORT'));
}
bootstrap();
