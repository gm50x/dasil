import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class MockEnvironmentService {
  constructor() {}
  get(key: string): string {
    throw new NotImplementedException();
  }
}
