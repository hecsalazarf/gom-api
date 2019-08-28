// Environment variables configuration mapping

module.exports = {
  keys: ['KEY1', 'KEY2'],
  auth: {
    auth0: {
      clientId: 'AUTH0_CLIENT_ID',
      clientSecret: 'AUTH0_CLIENT_SECRET',
    }
  },
  'web-push': {
    redis: {
      port: 'REDIS_PORT',
      host: 'REDIS_HOST',
    },
    vapid: {
      privateKey: 'VAPID_PRIVATE_KEY',
      publicKey: 'VAPID_PUBLIC_KEY'
    }
  },
  session: {
    redis: {
      port: 'REDIS_PORT',
      host: 'REDIS_HOST',
    }
  },
  prisma: {
    secret: 'PRISMA_SECRET',
    endpoint: 'PRISMA_ENDPOINT'
  }
}