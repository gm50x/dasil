import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'hollywood', name: 'genre' })
export class Genre {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
