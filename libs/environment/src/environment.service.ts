import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentService {
  constructor(private readonly config: ConfigService) {}

  get(env: string) {
    return this.config.get(env);
  }
}
