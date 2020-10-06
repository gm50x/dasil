import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Genre } from './genre.entity';
import { Person } from './person.entity';

@Entity({ schema: 'hollywood', name: 'movie' })
export class Movie {
  @PrimaryColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  subtitle: string;

  @OneToOne(() => Genre)
  @JoinColumn({ name: 'genre' })
  genre: Genre;

  @ManyToMany(
    () => Person,
    person => person.id,
  )
  @JoinTable({
    schema: 'hollywood',
    name: 'movie_person',
    joinColumn: { name: 'movie_id' },
    inverseJoinColumn: { name: 'person_id' },
  })
  actors: Array<Person>;
}
