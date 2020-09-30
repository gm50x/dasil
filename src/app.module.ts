import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  GetAllAnimalsRoute,
  GetAllAnimalsUseCase,
  GetAllFruitsRoute,
  GetAllFruitsUseCase,
} from '.';

@Module({
  imports: [EnvironmentModule, AutoSwaggerModule],
  controllers: [GetAllAnimalsRoute, GetAllFruitsRoute, AppController],
  providers: [AppService, GetAllAnimalsUseCase, GetAllFruitsUseCase],
})
export class AppModule {}
