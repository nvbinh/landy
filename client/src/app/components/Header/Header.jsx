import React from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import Navigation from "../Nav";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        {/* <ul>
          <li>
            <NavLink exact to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink exact to="/signup">Sign Up</NavLink>
          </li>
        </ul> */}
        <Navigation />
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
