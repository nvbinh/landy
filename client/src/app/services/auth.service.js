/**
 * https://loopback.io/doc/en/lb2/Making-authenticated-requests.html
 * Pass the access token as parameters or headers
 */
export function authHeader() {
  const userStorage = localStorage.getItem("user");
  let user = null;
  if (userStorage) {
    user = JSON.parse(userStorage);
  }
  
  if (user && user.id) {
    const authorization = ["Authorization:", user.id].join(" ");
    return {authorization};
  } else {
    return {};
  }
}