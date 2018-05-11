import {authHeader} from "./auth.service";
import request from "../utils/ApiUtils";

const login = async (username, password) => {
  const credentials = {email: username, password: password};
  const users = await request({method: "post", url: "api/Customers/login", data: credentials});

  return users;
};

const getUsers = async (filters) => {
  const users = await request({method: "get", url: "api/Customers", filter: filters});

  return users;
};

export const UserService = {
  login,
  getUsers
};

// function login(username, password) {
//   return fetchUser(username, password);
// };