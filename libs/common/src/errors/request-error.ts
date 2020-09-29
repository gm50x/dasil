import { ApiProperty } from '@nestjs/swagger';

export class RequestError {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: Array<string>;
  @ApiProperty()
  error: string;
}
