import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";

import axios from 'axios';

const fetchUserSuccess = users => ({
  type: types.GET_LOGGED_USER,
  users
});

const fetchUser = (id) => async (dispatch) => {
  const credentials = {email:"bing@gmail.com",password:"bing"};
  const users = await request({method: "post", url: "api/Users/login", data: credentials});

  dispatch(fetchUserSuccess(users));
};

export default fetchUser;