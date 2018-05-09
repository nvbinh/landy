import {authHeader} from "./auth.service";
import request from "../utils/ApiUtils";

// const login = (username, password) => {
//   const credentials = {email: username, password: password};
//   const users = request({method: "post", url: "api/Users/login", data: credentials});

//   return users;
// };

const login = async (username, password) => {
  const credentials = {email: username, password: password};
  const users = await request({method: "post", url: "api/Users/login", data: credentials});

  return users;
};

export const UserService = {
  login
};

// function login(username, password) {
//   return fetchUser(username, password);
// };