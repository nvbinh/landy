import React from "react";
import {Control, Form, actions, Errors} from "react-redux-form";
import {connect} from "react-redux";
import Styles from "./Login.Form.pcss";
import * as userActions from "../../redux/actions/Users";
import validator from "validator";

class LoginForm extends React.Component {
  handleSubmit(userinfo) {
    console.log(userinfo);
    this.props.fetchUsedNeeded("bing@gmail.com", "bing");
  }

  render() {
    const isEmail = (val) => {
      return validator.isEmail(val);
    };

    return (
      <Form
        model="userinfo"
        onSubmit={(userinfo) => this.handleSubmit(userinfo)}
      >
        <Errors
          className={`${Styles.errors} test`}
          model=".firstName"
          show="touched"
          messages={{
            valueMissing: 'Username is required',
            maxLength: 'Must be 15 characters or less',
            isEmail: 'Email is not correct format'
          }}
        />
        <div className="form-group">
          <label htmlFor="userinfo.firstName">Email: </label>
          <Control.text
            model=".firstName"
            className="form-control"
            placeholder="Enter email"
            required
            validators={{
              maxLength: (val) => val.length <= 15,
              isEmail: (val) => isEmail(val)
            }}
            validateOn="blur" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Password: </label>
          <Control.text
            model=".lastName"
            className="form-control"
            placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-default">
          Login
        </button>
      </Form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    userinfo: state.Users.userinfo
  };
};

export default connect(mapStateToProps, userActions)(LoginForm);