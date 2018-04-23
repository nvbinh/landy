import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";

const fetchUserSuccess = users => ({
  type: types.GET_LOGGED_USER,
  users
});

const fetchUser = (id) => async (dispatch) => {
  const credentials = {"email":"bing@gmail.com","password":"bing"};
  const response = await request({method: "POST", url: "api/Users/login", data: credentials});

  dispatch(fetchUserSuccess(response));
};

export default fetchUser;