import { authHeader } from './auth.service';
import decode from 'jwt-decode';
import request from '../utils/ApiUtils';
import * as CommonConstants from '../constants/Common.Constants';

const login = async (username, password) => {
  const credentials = { email: username, password };
  const users = await request({ method: 'post', url: 'api/Customers/login', data: credentials });

  return users;
};

const getUsers = async (filters) => {
  const users = await request({ method: 'get', url: 'api/Customers', filter: filters });

  return users;
};

export const UserService = {
  login,
  getUsers
};

// function login(username, password) {
//   return fetchUser(username, password);
// };


// export class UserService {
//   constructor() {
//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//   }

//   async login(username, password) {
//     const credentials = {email: username, password: password};
//     const users = await request({method: "post", url: "api/Customers/login", data: credentials});

//     return users;
//   }

//   loggedIn() {
//     const token = localStorage.getItem(CommonConstants.STORAGE_TOKEN_NAME);
//     return !!token && !this.isTokenExpired(token);
//   }

//   isTokenExpired(token) {
//     try {
//       const decodedToken = decode(token);
//       return (decodedToken.exp < Date.now() / 1000);
//     }
//     catch (error) {
//       return false;
//     }
//   }

//   logout() {
//     localStorage.removeItem(CommonConstants.STORAGE_TOKEN_NAME);
//   }
// }
