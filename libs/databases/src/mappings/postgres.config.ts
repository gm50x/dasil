import { EnvironmentService } from '@gm50x/environment';

export class PostgresConfig {
  type: string = 'postgres';
  url: string;
  synchronize: boolean = false;
  autoLoadEntities: boolean = true;

  constructor(env: EnvironmentService, key: string) {
    this.url = env.get(`${key}_URL`);
    this.synchronize =
      env.get(`${key}_SYNC`) === 'true' && env.get('SYNCHRONIZE') === 'true';
  }
}
