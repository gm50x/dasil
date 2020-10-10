import { ApiProperty } from '@nestjs/swagger';

export class RequestForbiddenError {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  error: string;
}
