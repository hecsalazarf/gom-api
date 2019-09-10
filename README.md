# Gom API

## Description
The backend implementation with a [NestJS]() architecture that gives functionality to the [Gom UX](https://github.com/hecsalazarf/gom-ui). It is mainly composed by the following modules:

* A GraphQL API
* An Auth REST API.
* Web Push Service with a subscription REST API.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# debug mode
$ npm run start:debug

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## GraphQL module
Gom API makes use of [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Prisma Binding](https://github.com/prisma/prisma-binding) by delegating execution of queries, mutations, and subscriptions to the API of the underlying [Prisma](https://www.prisma.io/) database service. 

The Prisma model is defined in [datamodel.prisma](./prisma/datamodel.prisma), while the the configuration for Prisma service is in [prisma.yml](./prisma/prisma/yml)

We use the [GraphQL CLI](https://github.com/Urigo/graphql-cli) for development workflows, wrapped as npm scripts:

```bash
# deploy prisma datamodel
$ npm run prisma:deploy

# download schema from endpoint for schema delegation
$ npm run graphql:schema

# generate Prisma binding for the types of the GraphQL schema
$ npm run graphql:binding

# generate Typescript definitions from the GraphQL schema
$ npm run graphql:typings

# Execute the whole workflow (command above)
$ npm run graphql:build
```

The GraphQL CLI configuration can be edited in `.graphqlconfig.yaml`. Check the full documentation [here](https://oss.prisma.io/content/graphql-cli/01-overview).

## Auth module
> WIP
