import * as cookieParser from 'cookie-parser';

export function cookie() {
  return cookieParser(['hola', 'mundo']);
}
