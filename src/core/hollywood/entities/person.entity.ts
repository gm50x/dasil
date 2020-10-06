import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'hollywood', name: 'person' })
export class Person {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  birthdate: Date;
}
