import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentLoaderService {
  constructor(private env: NodeJS.ProcessEnv = process.env) {
    this.loadEnvironment = this.loadEnvironment.bind(this);
  }
  loadEnvironment(): NodeJS.ProcessEnv {
    const NODE_ENV = this.env.NODE_ENV || 'development';
    const PORT = this.env.PORT || '3000';
    const PROTECTED_ENVIRONMENTS =
      this.env.PROTECTED_ENVIRONMENTS || 'staging;production;';
    const SYNCHRONIZE = (
      !PROTECTED_ENVIRONMENTS.includes(NODE_ENV) &&
      this.env.SYNCHRONIZE === 'true'
    ).toString();

    return {
      ...this.env,
      NODE_ENV,
      PORT,
      PROTECTED_ENVIRONMENTS,
      SYNCHRONIZE,
    };
  }
}
