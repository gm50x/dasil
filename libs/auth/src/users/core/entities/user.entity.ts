import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @Length(5)
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @Length(8)
  password: string;
  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
