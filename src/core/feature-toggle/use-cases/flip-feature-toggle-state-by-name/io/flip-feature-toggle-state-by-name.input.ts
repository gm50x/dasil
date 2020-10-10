import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty } from 'class-validator';

export class FlipFeatureToggleStateByNameInput {
  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty()
  toggleName: string;

  constructor(toggleName: string) {
    this.toggleName = toggleName;
  }
}
