# Gom API

## Description
The backend implementation with a [NestJS]() architecture that gives functionality to the [Gom UX](https://github.com/hecsalazarf/gom-ui). It is mainly composed by the following modules:

* A GraphQL API
* An Auth REST API.
* Web Push Service with a subscription REST API.

## Prerequisites
* Node.js >= 8.9.0
* npm >= 5.6.0
* Redis >= 5.05
* Postgres >= 11.4
* Prisma >= 1.34

#### Docker images
For a fast and ready to use (usually on development) Redis, Postgres and Prisma solutions, you may want to deploy a Docker stack. Use the *docker/docker-compose.yml* file to deploy them.

#### Prisma model
Gom Api needs the deployed model on Prisma. See deployment step [6](#6.-deploy-prisma-model) to know how to do it.

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

# create compiled bundle
$ npm run build

# production mode
$ npm run start:prod
```

## Deployment with Docker
**Important note:** Deployment with Docker is intended for a production environment.

Before deployment, make sure to properly configure your firewall. Refer to this [guide](https://github.com/hecsalazarf/server-configs/blob/master/docker/Firewall_for_Docker_Swarm_with_UFW.md).

### 1. Dockerize the app
Dockerize the app following the steps in [here](docker/README.md).

### 2. Pull Docker images
Gom Api requires these images in order to work; pull them from the Docker Hub registry.

```bash
$ docker pull prismagraphql/prisma:1.34
$ docker pull postgres:11.4-alpine
$ docker pull redis:5.0.5-alpine
```

### 3. Initialize Docker Swarm
Start the swarm by running:
```bash
# Change the advertise address according to your server IP
$ docker swarm init --advertise-addr 10.5.96.4
```

### 4. Create secrets (optional)
Docker secrets are optional since you can set the corresponding environment variables directly in the *docker-compose.yaml* file. However, in order to centrally manage this data and securely transmit it to only those containers that need access to it, Docker Secrets are recommended.

All environment variables ending with the suffix **_FILE** support reading its values from secrets.

Gom Api needs the following secrets to boot up. 
* gom_app_key
* gom_auth0_client_id
* gom_auth0_client_secret
* gom_pg_password
* gom_prisma_secret
* gom_vapid_private_key
* gom_vapid_public_key

You can create them with the command:
```bash
$ docker secret create SECRET_NAME INPUT_FILE
```

See the Docker [documentation](https://docs.docker.com/engine/reference/commandline/secret_create/) for more details.

### 5. Deploy the stack
Run:
```bash
$ docker stack deploy -c docker/docker-compose-stage.yml gom
```

### 6. Deploy Prisma model
Once you have deployed the Docker stack, deploy the Prisma model:
```
$ cd prisma
$ npx prisma deploy
```

If you configured a Managemet Api key, you should set the `PRISMA_MANAGEMENT_API_SECRET` environment variable.
```bash
$ PRISMA_MANAGEMENT_API_SECRET=your_management_api_key npx prisma deploy 
```

## Proxy
When running behind a proxy, make sure to set these headers,
* X-Forwarded-For
* X-Forwarded-Host
* X-Forwarded-Proto

and also, enable WebSocket connections.

With Nginx, you might do it the following way.

```Nginx
location /api/ {
  # Proxy pass 
  proxy_pass <GOM_API_SERVER>;
  proxy_buffering off;
  proxy_set_header X-Real-IP $remote_addr;
  # Express required headers when 'trust proxy' is enabled
  proxy_set_header X-Forwarded-For $realip_remote_addr;
  proxy_set_header X-Forwarded-Host $hostname;
  proxy_set_header X-Forwarded-Proto $scheme;
  # Support web sockets
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "Upgrade";
}
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
JWT = <TOKEN_PAYLOAD {cookie}>.<TOKEN_SIGNATURE {redis}>
```

Session is configurable with these properties:

* `session.redis.host`: Redis host, e.g. `'172.18.0.1'`
* `session.redis.port`: Redis port, e.g. `6379`
* `session.redis.db`: Redis logical database
* `session.options.maxAge`: Max age in milliseconds
* `session.options.httpOnly` Specifies the boolean value for the `HttpOnly Set-Cookie` attribute.
* `session.options.sameSite`: Specifies the boolean or string to be the value for the `SameSite Set-Cookie` attribute.
* `session.options.secure`: Specifies the boolean value for the `Secure Set-Cookie` attribute. Please note that `secure: true` is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies. If secure is set, and you access your site over HTTP, the cookie will not be set.

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
	"password": "yourpassword"
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

## Web push notifications module
Gom follows [VAPID](https://tools.ietf.org/html/rfc8292) specification to send Webpush messages. We currently support notifications for CREATE and UPDATE operations on orders.

As required by the specification, a private and a public key are needed. They are configured in `web-push.vapid.privateKey` and `web-push.vapid.publicKey` respectively within configuration files. You can also set environment variables
`VAPID_PRIVATE_KEY` and `VAPID_PUBLIC_KEY`.

To start receiving notifications, a user previously had to login and subscribe to the service; then order operations will push the notification if a subscription was saved for a given user participating in such order.

It is recommended to unsubscribe after loging out. However, Gom automatically deletes all invalid subscriptions whenever a notification is attempted to be sent.

All subcriptions are stored in Redis, therefore, Webpush module requires Redis configurations properties: 
* `web-push.redis.host`
* `web-push.redis.port`
* `web-push.redis.db`

### API endpoints
#### Subscribe `/webpush/subscribe/` [POST]
Subscribe to notifications
##### Request
```json
{
	"endpoint": "http1234567",
	"keys": {
		"auth": "123",
		"p256dh": "leloas"
	}
}
```
##### Response
`True` or `false`

#### Unsubscribe `/webpush/unsubscribe/` [POST]
Unsubscribe from notifications
##### Request
```json
{
	"endpoint": "http123",
	"keys": {
		"auth": "123",
		"p256dh": "leloas"
	}
}
```
##### Response
`True` or `false`

## Redis module
The Redis module is called internally to create connection clients. At this moment, only one instance of Redis is used with different logical databases. 

* DB 1: Webpush subscriptions.
* DB 2: Sessions.
* DB 3: Login rate limiter.

To change the default logical databases, set the configuration property `redis.db`. The host and port of Redis is set with `redis.host` and `redis.port` properties respectively. If you want to override the values with environment variables, you could use `REDIS_HOST` and `REDIS_PORT`.

## Versioning

0.5.3

## Authors

* **Héctor Salazar** - *hecsalazarf*

## Acknowledgments

Thanks to anyone whose code was used. This project is built on top of talented programmers' work; I just put the pieces together. 