import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";
import {UserService} from "../../services/user.service";

import axios from 'axios';

const fetchUserSuccess = user => ({
  type: types.GET_LOGGED_USER,
  user
});

const fetchUser = (username, password) => (dispatch) => {
  // const credentials = {email: username,password: password};
  // const users = await request({method: "post", url: "api/Users/login", data: credentials});

  UserService.login(username, password).then(user => {
    dispatch(fetchUserSuccess(user));
  });
};

export const fetchUsedNeeded = (username, password) => (dispatch) => {
  dispatch(fetchUser(username, password));
};