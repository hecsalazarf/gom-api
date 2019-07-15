import * as cookieSession from 'cookie-session';

export function session() {
  return cookieSession({
    name: 'session',
    keys: ['hola', 'mundo'],
    maxAge: 3600 * 1000, // 24 * 3600 * 1000, // 1 day
    signed: true,
    httpOnly: true,
  });
}
