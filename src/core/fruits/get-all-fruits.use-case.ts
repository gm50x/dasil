import { Injectable } from '@nestjs/common';
import { GetAllAnimalsOutput } from '../animals/io/get-all-animals.output';
import { GetAllFruitsInput } from './io/get-all-fruits.input';

@Injectable()
export class GetAllFruitsUseCase {
  async activate(input: GetAllFruitsInput): Promise<GetAllAnimalsOutput> {
    return Promise.resolve(['Apple', 'Banana', 'Mango']);
  }
}
