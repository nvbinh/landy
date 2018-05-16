import request from '../../utils/ApiUtils';
import * as types from '../../constants/ActionTypes';

export function getConfig() {
  return async (dispatch, getState) => {
    const credentials = { email: 'bing@gmail.com', password: 'bing' };
  	const users = await request({ method: 'post', url: 'api/Users/login', data: credentials });
    dispatch({
      type: types.GET_LOGGED_USER,
      config: users
    });
  };
}
