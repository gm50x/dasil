import { EnvironmentService } from '@gm50x/environment';
import { MongoConfig } from './mongo.config';
import { OracleConfig } from './oracle.config';
import { PostgresConfig } from './postgres.config';

export class DatabaseConfig {
  type: string;
  url: string;
  connectString: string;
  username: string;
  password: string;
  synchronize: boolean;
  autoLoadEntities: boolean;
  useUnifiedTopology: boolean;
  useNewUrlParser: boolean;

  constructor(env: EnvironmentService, key: string) {
    const dbType = env.get(`${key}_DB_TYPE`);
    const Instance = {
      postgres: PostgresConfig,
      mongodb: MongoConfig,
      oracle: OracleConfig,
    }[dbType];
    const dbConfig = new Instance(env, key);

    Object.keys(dbConfig).forEach(prop => (this[prop] = dbConfig[prop]));
  }
}
