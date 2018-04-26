import * as types from "../../constants/ActionTypes";

const initialState = {
  pending: true,
  logged: false
};

const userReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case types.GET_LOGGED_USER:
      return {...state, users: action.users};
    case types.SET_LOGGED_USER:
      return {...state, logged: action.logged};
  }

  // if (action.type === types.GET_LOGGED_USER) {
  //   return Object.assign({}, state, {
  //     pending: false,
  //     users: action.users
  //   });
  // }

  // action.type === types.GET_LOGGED_USER

  // if (action.type === types.SET_LOGGED_USER) {
  //   return Object.assign({}, state, {
  //     pending: false,
  //     logged: action.logged
  //   });
  // }

  return state;
};

export default userReducer;