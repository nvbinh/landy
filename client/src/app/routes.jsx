import React from "react";
// import {Redirect, Route, IndexRoute, IndexRedirect } from 'react-router';

import HookStore from "./stores/hookStore";
import store from "./stores/store";

import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./../App";
import Login from "./views/auth/login";
import RouteNotFound from "./views/routeNotFound";
import errorHandler from "./utils/errorHandler";

const routes = props => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/auth/login" component={Login} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default routes;
