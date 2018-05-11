import * as types from "../../constants/ActionTypes";

const initialState = {
  authenticated: false
};

const userReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case types.GET_LOGGED_USER:
      return {...state, user: action.user, authenticated: true};
    case types.SET_LOGGED_USER:
      return {...state, authenticated: false};
    case types.GET_USERS:
      return {...state, uesrs: action.users, authenticated: true};
  }

  return state;
};

export default userReducer;