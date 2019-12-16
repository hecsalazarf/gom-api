const defer = require('config/defer').deferConfig;

module.exports = {
  auth: {
    local: {
      secret: defer(function () {
        return this.appKey; // deferred configuration
      })
    },

  },
  session: {
    name: 'session-id',
    secret: defer(function () {
      return this.appKey;// deferred configuration
    })
  },
  accessToken: {
    name: 'session-token',
  },
  csrf: {
    name: 'csrf-token',
  }
};
