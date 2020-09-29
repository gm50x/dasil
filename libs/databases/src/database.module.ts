import { EnvironmentModule, EnvironmentService } from '@gm50x/environment';
import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfig } from './mappings/database.config';

@Module({})
export class DatabaseModule {
  static fromEnvironmentKeys(keys: Array<string>): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        ...keys.map((key, i) =>
          TypeOrmModule.forRootAsync({
            imports: [EnvironmentModule],
            useFactory: (env: EnvironmentService) =>
              new DatabaseConfig(env, key) as TypeOrmModuleOptions,
            inject: [EnvironmentService],
            name:
              keys.length > 1 && i >= 1
                ? `${key.toLowerCase()}Conn`
                : undefined,
          }),
        ),
      ],
    };
  }
}
