import { ApiProperty } from '@nestjs/swagger';
export class ServerError {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
}
