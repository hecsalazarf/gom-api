module.exports = {
  appKey: 'hola', // openssl rand -base64 10
  auth: {
    auth0: {
      tokenUrl: 'https://dev-gom.auth0.com/oauth/token',
      issuer: 'https://dev-gom.auth0.com/',
      clientId: '<AUTH0_CLIENT_ID>',
      clientSecret: '<AUTH0_CLIENT_SECRET | AUTH0_CLIENT_SECRET_FILE>',
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
      privateKey: '<VAPID_PRIVATE_KEY | VAPID_PRIVATE_KEY_FILE>',
      publicKey: '<VAPID_PUBLIC_KEY | VAPID_PUBLIC_KEY_FILE>'
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
