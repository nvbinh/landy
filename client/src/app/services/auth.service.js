/**
 * https://loopback.io/doc/en/lb2/Making-authenticated-requests.html
 * Pass the access token as parameters or headers
 */
export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (user && user.token) {
    const authorization = ["Authorization:", user.id].join(" ");
    return {authorization};
  } else {
    return {};
  }
}