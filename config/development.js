module.exports = {
  appKey: 'hola', // openssl rand -base64 10
  auth: {
    auth0: {
      tokenUrl: 'https://arkio.auth0.com/oauth/token',
      issuer: 'https://arkio.auth0.com/',
      clientId: 'tk37Qxx0ozSe3k2W9THkVnuj35eU7FDo',
      clientSecret: '43TAIqHtRt40d2-d8ZltJW_0_YJ4WURo5zgTFS_dthPqZpPvCPZJ9GA8FI35dCZx',
      audience: 'http://dev.api.gom',
      scope: 'openid offline_access',
      jwksEndpoint: 'https://arkio.auth0.com/.well-known/jwks.json'
    },
    local: {
      issuer: 'https://api.gom.com/',
      audience: 'http://dev.api.gom',
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
        points: 50,
        duration: 60 * 60 * 24, // attempts per day
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
      maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
      httpOnly: true,
      sameSite: true,
      secure: true
    }
  },
  accessToken: {
    options: {
      maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
      httpOnly: false,
      sameSite: true,
      secure: true
    },
  },
  csrf: {
    options: {
      sameSite: true,
      secure: true
    }
  },
  prisma: {
    endpoint: 'http://172.18.0.1:4466',
    secret: '12345'
  },
  cors: {
    whitelist: [
      '192.168.0.2'
    ]
  }
}
