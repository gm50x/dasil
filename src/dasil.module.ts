import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import {
  GetAllAnimalsRoute,
  GetAllAnimalsUseCase,
  GetAllFruitsRoute,
  GetAllFruitsUseCase,
} from '.';

@Module({
  imports: [EnvironmentModule, AutoSwaggerModule],
  controllers: [GetAllAnimalsRoute, GetAllFruitsRoute],
  providers: [GetAllAnimalsUseCase, GetAllFruitsUseCase],
})
export class DasilModule {}
