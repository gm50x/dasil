import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAllAnimalsUseCase } from './core/animals';
import { GetAllFruitsUseCase } from './core/fruits';
import { GetAllAnimalsRoute, GetAllFruitsRoute } from './routes';

@Module({
  imports: [EnvironmentModule, AutoSwaggerModule],
  controllers: [GetAllAnimalsRoute, GetAllFruitsRoute, AppController],
  providers: [AppService, GetAllAnimalsUseCase, GetAllFruitsUseCase],
})
export class AppModule {}
