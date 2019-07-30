module.exports = {
  keys: ['hola', 'mundo'],
  auth: {
    auth0: {
      url: 'https://arkio.auth0.com/',
      issuer: 'https://arkio.auth0.com/',
      grantType: 'password',
      clientId: 'tk37Qxx0ozSe3k2W9THkVnuj35eU7FDo',
      clientSecret: '43TAIqHtRt40d2-d8ZltJW_0_YJ4WURo5zgTFS_dthPqZpPvCPZJ9GA8FI35dCZx',
      audience: 'http://dev.api.gom',
      scope: 'openid',
      jwksEndpoint: 'https://arkio.auth0.com/.well-known/jwks.json'
    },
    local: {
      issuer: 'https://api.gom.com/',
      audience: 'http://dev.api.gom'
    }
  }
}
