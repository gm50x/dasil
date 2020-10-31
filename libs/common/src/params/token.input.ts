import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class TokenInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  Authorization: string;

  constructor(authorization?: string) {
    this.Authorization = authorization;
  }
}
