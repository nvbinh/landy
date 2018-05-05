import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import Users from "./Users";

const rootReducer = combineReducers({
  Users,
  routing: routerReducer
});

export default rootReducer;