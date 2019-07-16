module.exports = {
  session: {
    key: 'session-id',
    maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
    httpOnly: true,
    encrypt: true,
    signed: true,
  },
  accessToken: {
    cookieName: 'access-token',
    options: {
      maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
      httpOnly: false,
      signed: false,
    },
  },
}
