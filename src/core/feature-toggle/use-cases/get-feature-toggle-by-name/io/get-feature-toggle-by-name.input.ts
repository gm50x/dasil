import { ApiProperty } from '@nestjs/swagger';

export class GetFeatureToggleByNameInput {
  @ApiProperty()
  toggleName: string;

  constructor(toggleName: string) {
    this.toggleName = toggleName;
  }
}
