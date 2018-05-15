import React from "react";
import {Control, Form, actions, Errors} from "react-redux-form";
import {connect} from "react-redux";
import Styles from "./Login.Form.pcss";
import * as userActions from "../../redux/actions/Users";
import validator from "validator";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.getUsers = this.getUsers.bind(this);
  }

  handleSubmit(userinfo) {
    console.log(userinfo);
    this.props.login("bing@gmail.com", "bing");

    // userActions.login()
  }

  getUsers() {
    let test = this.props.getUsers({});
  }

  render() {
    const isEmail = (val) => {
      return validator.isEmail(val);
    };

    const maxLength = (val) => {
      return val && val.trim().length <= 15
    };

    return (
      <Form
        hideNativeErrors
        model="userinfo"
        onSubmit={(userinfo) => this.handleSubmit(userinfo)}
      >
        <Errors
          className="errors"
          model=".username"
          show="touched"
          messages={{
            valueMissing: 'Username is required',
            // maxLength: 'Must be 15 characters or less',
            isEmail: 'Email is not correct format'
          }}
        />
        
        <Errors
          className="errors"
          model=".password"
          show="touched"
          messages={{
            valueMissing: 'Password is required'
          }}
        />
        <div className="form-group">
          <label htmlFor="userinfo.username">Email: </label>
          <Control.text
            type="email"
            model=".username"
            className="form-control"
            placeholder="Enter email"
            required
            validators={{
              // maxLength: (val) => maxLength(val),
              isEmail: (val) => isEmail(val)
            }}
            validateOn="blur" />
        </div>
        <div className="form-group">
          <label htmlFor="userinfo.password">Password: </label>
          <Control.text
            type="password"
            model=".password"
            className="form-control"
            placeholder="Enter password"
            required
            validateOn="blur" />
        </div>

        <button type="submit" className="btn btn-default">
          Login
        </button>

        <button className="btn btn-default" onClick={this.getUsers}>
          Get Users
        </button>
      </Form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props
  };
};

export default connect(mapStateToProps, userActions)(LoginForm);