import { ApiProperty } from '@nestjs/swagger';

export class GetFeatureByNameInput {
  @ApiProperty()
  toggleName: string;

  constructor(toggleName: string) {
    this.toggleName = toggleName;
  }
}
