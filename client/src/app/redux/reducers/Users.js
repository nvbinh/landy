import * as types from "../../constants/ActionTypes";
import * as CommonConstants from "../../constants/Common.Constants";

const initialState = {
  authenticated: localStorage.getItem(CommonConstants.STORAGE_TOKEN_NAME) ? true : false
};

const userReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        authenticated: true,
        errorMessage: ""
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        authenticated: false,
        errorMessage: action.message
      };
    case types.USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }

  return state;
};

export default userReducer;
