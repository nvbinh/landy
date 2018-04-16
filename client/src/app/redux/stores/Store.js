import {createStore, compose, applyMiddleware, combineReducers, bindActionCreators} from "redux";
import thunk from "redux-thunk";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import {BrowserHistory} from "react-router";
import rootReducer from "../reducers/index";