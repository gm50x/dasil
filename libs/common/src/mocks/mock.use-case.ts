import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class MockUseCase {
  activate(input?: any) {
    throw new NotImplementedException();
  }
}
