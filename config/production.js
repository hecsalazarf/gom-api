module.exports = {
  appKey: '<APP_KEY | APP_KEY_FILE>',
  auth: {
    auth0: {
      tokenUrl: 'https://stage-gom.auth0.com/oauth/token',
      issuer: 'https://stage-gom.auth0.com/',
      clientId: '<AUTH0_CLIENT_ID>',
      clientSecret: '<AUTH0_CLIENT_SECRET | AUTH0_CLIENT_SECRET_FILE>',
      audience: 'https://gql.gom.com',
      scope: 'openid offline_access',
      jwksEndpoint: 'https://stage-gom.auth0.com/.well-known/jwks.json'
    },
    local: {
      issuer: 'https://auth.gom.com',
      audience: 'https://gql.gom.com',
      expiration: 60 * 30, // (seconds) half an hour
    },
    'login-limiter': {
      redis: {
        port: '<REDIS_PORT>',
        host: '<REDIS_HOST>',
        db: 3
      },
      slowBrute: {
        // block IP for a day on 50 failed attempts per day
        points: 50, // attempts per day
        duration: 60 * 60 * 24, // (s) store for 1 day
        blockDuration: 60 * 60 * 24 // Block for 1 day
      },
      consecutiveFails: {
        // count number of consecutive failed logins and allows
        // a maximum of 5 username-IP attempts
        points: 5, 
        duration: 60 * 60 * 24 * 90, // Store number for 90 days since first fail
        blockDuration: 60 * 60, // Block for 1 hour
      }
    },
  },
  'web-push': {
    redis: {
      port: '<REDIS_PORT>',
      host: '<REDIS_HOST>',
      db: 1
    },
    vapid: {
      subject: 'https://prod.gom.com',
      privateKey: '<VAPID_PRIVATE_KEY | VAPID_PRIVATE_KEY_FILE>',
      publicKey: '<VAPID_PUBLIC_KEY | VAPID_PUBLIC_KEY_FILE>'
    }
  },
  session: {
    redis: {
      port: '<REDIS_PORT>',
      host: '<REDIS_HOST>',
      db: 2
    },
    options: {
      maxAge: 3600 * 1000 * 24 * 60, // 60 days
      httpOnly: true,
      sameSite: 'Lax',
      secure: true
    }
  },
  accessToken: {
    options: {
      maxAge: 3600 * 1000 * 24 * 60, // 60 days
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
    endpoint: '<PRISMA_ENDPOINT>',
    secret: '<PRISMA_SECRET | PRISMA_SECRET_FILE>'
  },
}
