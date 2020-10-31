import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';

@Injectable()
export class GetUserByUsernameUseCase {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'gm50x',
        password: 'ch@ng3m3',
      },
      {
        id: 2,
        username: 'getuliomagela',
        password: 'ch@ng3m3',
      },
    ];
  }

  async activate(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
