import { Injectable } from '@nestjs/common';
import { GetAllAnimalsInput } from './io/get-all-animals.input';
import { GetAllAnimalsOutput } from './io/get-all-animals.output';

@Injectable()
export class GetAllAnimalsUseCase {
  activate(input: GetAllAnimalsInput): Promise<GetAllAnimalsOutput> {
    return Promise.resolve(['dog', 'cat', 'cockatiel'] as GetAllAnimalsOutput);
  }
}
