import * as CommonConstants from '../constants/Common.Constants';

/**
 * https://loopback.io/doc/en/lb2/Making-authenticated-requests.html
 * Pass the access token as parameters or headers
 */
export function authHeader() {
  const token = localStorage.getItem(CommonConstants.STORAGE_TOKEN_NAME) || null;

  if (!token) {
    return {};
  }

  const authorization = ['Authorization: Bearer ', token].join(' ');
  return { authorization };
}
