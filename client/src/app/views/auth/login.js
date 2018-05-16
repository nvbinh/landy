/* @flow */
import React, { Component } from "react";
import Header from "common/Header";

class Login extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  // Fetch passwords after first mount
  componentDidMount() {
    // this.getPasswords();
  }

  render() {
    const { _data } = this.state;

    return (
      <div className="Login">
        <Header />
        <div>
          <h1>Login Form</h1>
          <span className="icon-avatar" />
          <span className="icon-robot" />
          <button className="more">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
