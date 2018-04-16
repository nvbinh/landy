import * as types from "../constants/ActionTypes";

const initialState = {
  pending: true,
  logged: false
}

const loggedUserReducer = (state = initialState, action) => {
  
  if (action.type === types.GET_LOGGED_USER) {
    return Object.assign({}, state, {
      pending: false
    })
  }
  
  if (action.type === types.SET_LOGGED_USER) {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged
    })
  }
  
  return state
}

export default loggedUserReducer