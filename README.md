# Dasil
Dasil is a NestJS Framework learning project. Nest is a complete framework for developing backend services with Node. It's heavily driven on dependency injection and works with typescript out of the box. It also brings a lot of features to speed up development of applications, like configuring openapi, database, environment and many more. 

## Getting Started (Dasil)
You can run everything in this project with docker-compose or run it yourself. The application is configured to run on port 3000.

### Running with Docker
```bash
# start
$ docker-compose up

# stop
$ docker-compose down
```

### Running locally
You can also run it yourself. To do so, you have to raise the database first.
Run the docker command, but then kill the api service. 

```bash
$ docker-compose up && docker container stop toggles-api
```

Install the dependencies
```bash
$ npm install
```

Run the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Powered By: <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
