module.exports = {
  session: {
    name: 'session-id',
    options: {
      maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
      httpOnly: true,
      // encrypt: true,
      // signed: true,
    },
    maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
    httpOnly: true,
    encrypt: true,
    signed: true,
  },
  accessToken: {
    name: 'access-token',
    options: {
      maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
      httpOnly: false,
      signed: false,
    },
  },
  csrf: {
    name: 'csrf-token',
  }
}
