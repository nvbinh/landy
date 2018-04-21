import React from "react";
import PropTypes from "prop-types";
import {withRouter,NavLink} from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to="/">Login</NavLink>
          </li>
          <li>
            <NavLink exact to="/">Sign Up</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Header);