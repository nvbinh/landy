import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { combineForms, createForms } from "react-redux-form";
import Users from "./Users";

const initialUserState = {
  username: ""
};

const formStates = createForms({ userinfo: initialUserState });

const rootReducer = combineReducers({
  Users,
  ...createForms({ userinfo: initialUserState }),
  routing: routerReducer
});

export default rootReducer;
