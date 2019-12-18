module.exports = {
  appKey: 'hola', // openssl rand -base64 10
  auth: {
    auth0: {
      tokenUrl: 'https://dev-gom.auth0.com/oauth/token',
      issuer: 'https://dev-gom.auth0.com/',
      clientId: 'aOojWYLK4U0XN1S5NB2hNGPhqHkw6eOf',
      clientSecret: 'aSSqHDfO0YhovFOLEDdH7Xf2w7vR91w4DX0ybza59OQUV1DeHwZZq5PpShFrPjzJ',
      audience: 'https://gql.gom.com',
      scope: 'openid offline_access',
      jwksEndpoint: 'https://dev-gom.auth0.com/.well-known/jwks.json'
    },
    local: {
      issuer: 'https://auth.gom.com',
      audience: 'https://gql.gom.com',
      expiration: 60 * 30, // (seconds) half an hour
    },
    'login-limiter': {
      redis: {
        port: 6379,
        host: '172.18.0.1',
        db: 3
      },
      slowBrute: {
        // block IP for a day on 50 failed attempts per day
        points: 50, // attempts per day
        duration: 60 * 60 * 24, // (s) store for 1 day
        blockDuration: 60 * 60 * 24 // (s) Block for 1 day
      },
      consecutiveFails: {
        // count number of consecutive failed logins and allows
        // a maximum of 5 username-IP attempts
        points: 5,
        duration: 60 * 60 * 24 * 90, // (s) Store number for 90 days since first fail
        blockDuration: 60 * 60, // (s) Block for 1 hour
      }
    },
  },
  'web-push': {
    redis: {
      port: 6379,
      host: '172.18.0.1',
      db: 1
    },
    vapid: {
      subject: 'https://dev.gom.com',
      privateKey: '4DztwpAycGt6VZ1EwIfxxkIWyqk65AkGWLovcQ56Ns4',
      publicKey: 'BJo1ZeE62MZqVkZN8g9TOSFXOCtxmpmejfId8JpLT5C52ASUqhabfpVpHqQrySWhD0PCgEWohR1vKpbRJ48boWA'
    }
  },
  session: {
    redis: {
      port: 6379,
      host: '172.18.0.1',
      db: 2
    },
    options: {
      maxAge: 3600 * 1000, // (ms) 1 hour
      httpOnly: true,
      sameSite: false, // Set to false if you want to test from Postman
      secure: false
    }
  },
  accessToken: {
    options: {
      maxAge: 3600 * 1000, // (ms) 1 hour
      httpOnly: false,
      sameSite: 'Lax',
      secure: true
    },
  },
  csrf: {
    options: {
      sameSite: 'Lax',
      secure: true
    }
  },
  prisma: {
    endpoint: 'http://172.18.0.1:4466',
    secret: '12345'
  },
  mq: {
    redis: {
      port: 6379,
      host: '172.18.0.1',
      db: 4
    }
  },
  cors: {
    whitelist: [
      '192.168.0.2'
    ]
  }
};
