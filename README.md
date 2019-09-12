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
Gom API makes use of [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Prisma Binding](https://github.com/prisma/prisma-binding) by delegating execution of queries, mutations, and subscriptions to the API of the underlying [Prisma](https://www.prisma.io/) database service. GraphQL operations can ben executed in the `/graphql/` endpoint that is exposed.

The Prisma model is defined in [datamodel.prisma](./prisma/datamodel.prisma), while the the configuration for Prisma service is in [prisma.yml](./prisma/prisma.yml)

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
Authentication and authorization is done with [Auth0](https://auth0.com/) and gives users(sellers) access to their resources, except for Local Auth which is explained below.

We get the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token) from the [OAuth Token URL](https://auth0.com/docs/api/authentication#resource-owner-password) with the Resource Owner Password flow. We basically proxy the user credentials to Auth0 to get the access token and the refresh token (to renew sessions). 

In order to successfully connect to the Auth0 services, some parameters are required and they can be configured in the `auth0` section of the configuration files. These parameters are:

* `tokenUrl`: OAuth Token endpoint.
* `issuer`: Auth0 tenant issuer.
* `clientId`: Client ID of the Auth0 application. It may be set with the environment variable `AUTH0_CLIENT_ID` also.
* `clientSecret`: Client secret of the Auth0 application. Environment variable `AUTH0_CLIENT_SECRET` works as well.
* `audience`: API audience string. It is defined in the APIs section of the Auth0 dashboard.
* `scope`: This value must not be changed, but it essentially declares that we need an id token and a refresh token.
* `jwksEndpoint`: URL with the public key so that the token signature can be verified.

All listed parameters are provided by Auth0.

### Local auth

Local auth allows seller's customers interact with the app. This module also generates a JWT but with a shorter validity time and a more restricted permission policy. Its configuration is in the `local` part of the `auth` section, with far less properties to set up: 

* `issuer`: Defines as `https://auth.gom.com`.
* `audience`: The same audience as of Auth0 API.
* `expiration`: Token expiration time in seconds.

The local auth module signs its token with a symmetric algorithm (HS256); the key is configured either with the `appKey` property or the `APP_KEY` environment variable.

### Session module
Once tokens are got, we create a new session in Redis and store just the signature of the access token and the refresh token. The payload of the access token is stored in a cookie that the app can read to obtain the user permissions.

Every time a GraphQL or WebPush request arrives, it is validated in a middleware by taking its cookie payload and joining it with the corresponding signature. If the validation is successful, the request continues; otherwise and HTTP error is sent.

```
JWT = < TOKEN_PAYLOAD {cookie} > . < TOKEN_SIGNATURE {redis} >
```

### Login rate limiter
The login endpoint is protected with two rate limiters that can be configured within `login-limiter` section of the configuration files. They are based on [node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible).

#### Password brute attack by User and IP
It counts number of consecutive failed attempts during `consecutiveFails.duration` seconds and allows maximum `consecutiveFails.points` by username and IP pair. Once blocked, the user remains banned `consecutiveFails.blockDuration` seconds.

#### Password brute attack by IP
This blocks IP for `consecutiveFails.blockDuration` seconds on `consecutiveFails.points` failed attempts per `consecutiveFails.duration` seconds.

### API endpoints
#### Login with password grant `/auth/login/` [POST]
Seller login with username and password
##### Request
```json
{
	"grantType": "password",
	"username":"test@test.net",
	"password": "Quiron00"
}
```
##### Reponse
```json
{
    "nickname": "test",
    "name": "test@test.net",
    "picture": "https://s.gravatar.com/avatar/6139e4ad230648ca4f1e68b985ef589c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
    "email": "test@test.net",
    "sub": "auth0|5d7109da452e7b0c97ed00a6"
}
```

#### Login with phone grant `/auth/login/` [POST]
Seller's customer login with phone number
##### Request
```json
{
	"grantType": "phone",
	"username":"mWnnB0y32b",
	"phone": "5522145684"
}
```
##### Reponse
```json
{
    "nickname": "Pedro",
    "name": "Pedro Ruiz",
    "sub": "cjyi3ewi3006r07953qhkfzfr",
    "seller": "auth0|5d7109da452e7b0c97ed00a6",
    "business": "Paletas Marías"
}
```
#### Logout `/auth/logout/` [GET]
Clear session data and cookies of current session.

#### Ping `/auth/ping/` [GET]
Request CSRF token in order to make subsequent requests.
