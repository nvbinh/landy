import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";
import {UserService} from "../../services/user.service";

import axios from 'axios';

const fetchUserSuccess = users => ({
  type: types.GET_LOGGED_USER,
  users
});

const fetchUser = (username, password) => (dispatch) => {
  // const credentials = {email: username,password: password};
  // const users = await request({method: "post", url: "api/Users/login", data: credentials});

  const users = UserService.login(username, password);

  dispatch(fetchUserSuccess(users));
};

export const fetchUsedNeeded = (username, password) => (dispatch) => {
  dispatch(fetchUser(username, password));
};