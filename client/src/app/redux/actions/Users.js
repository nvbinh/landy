import axios from 'axios';
import request from "../../utils/ApiUtils";
import * as types from "../../constants/ActionTypes";
import * as CommonConstants from "../../constants/Common.Constants";
import {UserService} from "../../services/user.service";

const loginRequestState = credentials => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  authenticated: false,
  credentials
});

const loginSuccessState = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  authenticated: true,
  token: user.id
});

const loginFailureState = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  authenticated: false,
  message
});

const userProfileSuccess = profile => ({
  type: types.USER_PROFILE,
  isFetching: false,
  profile
});

const loginFunc = (username, password) => (dispatch) => {
  UserService.login(username, password).then(user => {
    localStorage.setItem(CommonConstants.STORAGE_TOKEN_NAME, user.id);
    dispatch(loginSuccessState(user));
  }).catch(error => {
    dispatch(loginFailureState({error: "Login failure. Error code: " + error.status}));
  });
};

const userProfileFunc = (filters) => (dispatch) => {
  UserService.getUsers(filters).then(users => {
    dispatch(userProfileSuccess(users));
  });
};

export const login = (username, password) => (dispatch) => {
  dispatch(loginFunc(username, password));
};

export const getUserProfile = (filters) => (dispatch) => {
  dispatch(userProfileFunc(filters));
};