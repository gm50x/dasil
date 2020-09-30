create schema feature;

set timezone to 'America/Sao_Paulo';

create table feature.toggle (
  name varchar(100) primary key,
  active boolean default false
);

insert into feature.toggle (name, active)
values ('SampleFeature', true);