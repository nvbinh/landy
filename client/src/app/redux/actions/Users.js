import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";

const fetchUserSuccess = users => ({
  type: types.GET_LOGGED_USER,
  users
});

const fetchUser = (id) => async (dispatch) => {
  const response = await request({method: "GET", url: "api/Users"});

  dispatch(fetchUserSuccess(response));
};

export default fetchUser;