-- create schema feature;
-- set timezone to 'America/Sao_Paulo';
-- create table feature.toggle (
--   name varchar(100) primary key,
--   active boolean default false
-- );
-- insert into feature.toggle (name, active)
-- values ('SampleFeature', true);

create schema hollywood;
set timezone to 'America/Sao_Paulo';

create table hollywood.genre (
  id serial primary key,
  name varchar(100),
  description varchar(200)
);

create table hollywood.movie (
  id serial primary key,
  title varchar(200),
  subtitle varchar(200),
  genre int references hollywood.genre(id)
);

create table hollywood.person (
  id serial primary key,
  name varchar(200),
  birthdate date
);

create table hollywood.role (
  id serial primary key,
  name varchar(100),
  description varchar(200)
);

create table hollywood.movie_person (
  person_id int references hollywood.person(id),
  movie_id int references hollywood.movie(id),
  role_id int references hollywood.role(id)
);

insert into hollywood.genre (name, description) values
('action', 'Beat them up'),
('adventure', 'You know life is an adventure, right?'),
('comedy', 'Laugh out loud kind''a movie'),
('horror', 'Feel that chill down your spine'),
('drama', 'Cry a lot');

insert into hollywood.person (name, birthdate) values 
('Dwane Johnson', to_date('1972-05-02', 'YYYY-MM-DD')),
('Vin Diesel', to_date('1967-07-18', 'YYYY-MM-DD')),
('Nicolas Cage', to_date('1964-01-07', 'YYYY-MM-DD'));

insert into hollywood.movie (title, subtitle, genre) values 
('Gone in 60 Seconds', '', 2),
('Triple X', '', 1),
('Fast and Furious', '', 2);

insert into hollywood."role" (name, description) values
('director', 'Point your fingers and scream at everybody kinda job'),
('actor', 'Play that awesome character you''ve always dreamed of');

insert into hollywood.movie_person (person_id, movie_id, role_id) values 
(1, 3, 2),
(2, 2, 2),
(2, 3, 2),
(3, 1, 2);