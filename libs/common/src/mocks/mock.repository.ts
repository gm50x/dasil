import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class MockRepository<T> {
  find(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  findAndCount(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  findByIds(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  findOne(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  findOneOrFail(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  insert(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  query(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  delete(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  count(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  recover(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
  save(obj?: any): Promise<T> {
    throw new NotImplementedException();
  }
}
