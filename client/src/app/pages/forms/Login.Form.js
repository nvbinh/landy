import React from "react";
import {Control, Form, actions, Errors} from "react-redux-form";
import {connect} from "react-redux";
import Styles from "./Login.Form.pcss";

class LoginForm extends React.Component {
  handleSubmit(userinfo) {
    console.log(userinfo);
  }

  render() {
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
            maxLength: 'Must be 15 characters or less'
          }}
        />
        <div className="form-group">
          <label htmlFor="userinfo.firstName">Email: </label>
          <Control.text
            model=".firstName"
            className="form-control"
            placeholder="Enter email"
            required
            validators={{ maxLength: (val) => val.length <= 15 }}
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

export default connect(mapStateToProps)(LoginForm);