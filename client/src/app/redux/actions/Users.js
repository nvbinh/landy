import request from "../../utils/ApiUtils";

const fetchUserSuccess = users => ({
  type: "test",
  users
});

const fetchUser = (id) => async (dispatch) => {
  const response = await request({method: "GET", url: "api/Users"});

  dispatch(fetchUserSuccess(response));
};

export default fetchUser;