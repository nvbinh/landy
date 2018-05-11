import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";
import {UserService} from "../../services/user.service";

import axios from 'axios';

const fetchUserSuccess = user => ({
  type: types.GET_LOGGED_USER,
  user
});

const getUsersSuccess = user => ({
  type: types.GET_USERS,
  getusers
});

const fetchUser = (username, password) => (dispatch) => {
  // const credentials = {email: username,password: password};
  // const users = await request({method: "post", url: "api/Users/login", data: credentials});

  UserService.login(username, password).then(user => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(fetchUserSuccess(user));
  });
};

const fetchUsers = (filters) => (dispatch) => {
  UserService.getUsers(filters).then(users => {
    dispatch(getUsersSuccess(users));
  });
};

export const login = (username, password) => (dispatch) => {
  dispatch(fetchUser(username, password));
};

export const getUsers = (filters) => (dispatch) => {
  dispatch(fetchUsers(filters));
};