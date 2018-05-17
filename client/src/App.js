import React from "react";
import { render } from "react-dom";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
// import {mapDispatchToProps} from "./app/redux/stores/Store";
import * as userActions from "./app/redux/actions/Users";
import FrontPage from "./FrontPage";
import LoginPage from "./app/pages/Login.Page";
import Header from "./app/components/Header";
import "./postcss/global.pcss";
import Styles from "./postcss/layout.pcss";

const NotFound = () => <h1>404 error..., page not found</h1>;

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {

  }

  render() {
    const { location, history } = this.props;

    return (
      <React.Fragment>
        <Header />
        <TransitionGroup className="page-wrapper">
          <CSSTransition
            in
            key={ location.key }
            classNames={
            history.action === "POP"
              ? {
                  enter: Styles.transitionBackEnter,
                  enterActive: Styles.transitionBackEnterActive,
                  exit: Styles.transitionBackExit,
                  exitActive: Styles.transitionBackExitActive
                }
              : {
                  enter: Styles.transitionForwardEnter,
                  enterActive: Styles.transitionForwardEnterActive,
                  exit: Styles.transitionForwardExit,
                  exitActive: Styles.transitionForwardExitActive
                }
          }
            timeout={ 300 }
          >
            <Switch location={ location }>
              <Route exact path="/" component={ FrontPage } />
              <Route path="/login" component={ LoginPage } />
              <Route component={ NotFound } />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
