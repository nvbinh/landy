import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import {BrowserHistory} from "react-router";
import {bindActionCreators} from "redux";
import rootReducer from "../reducers/index";
import fetchUser from "../actions/Users";

// const reducers = combineReducers({...rootReducer, routing: routerReducer});
const enhancers = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const Store = createStore(rootReducer, {}, enhancers);
export default Store;

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchUser, dispatch);
};