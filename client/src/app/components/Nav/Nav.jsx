import React from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Logo</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/news">News</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/news">Search lands</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/news">Search projects</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li>
              <NavLink exact to="/login">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signup">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
