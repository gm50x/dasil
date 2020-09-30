import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'feature', name: 'toggle' })
export class FeatureToggle {
  @PrimaryColumn()
  name: string;

  @Column()
  active: boolean;
}
