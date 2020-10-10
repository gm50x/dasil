import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class TokenInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  token: string;

  constructor(token?: string) {
    this.token = token;
  }
}
