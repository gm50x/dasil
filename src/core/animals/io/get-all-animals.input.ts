import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class GetAllAnimalsInput {
  @ApiProperty()
  @IsNumberString()
  id: string;
}
