export const oktaConfig = {
  
    clientId: '0oa8wbfgdit2P9ftN5d7',
    issuer: 'http://dev-32342776.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}