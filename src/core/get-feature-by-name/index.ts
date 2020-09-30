import { Injectable } from '@nestjs/common';

@Injectable()
export class GetFeatureByNameUseCase {
  async activate(): Promise<any> {
    return 'Hello World!';
  }
}
