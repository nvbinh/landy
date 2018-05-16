import React from "react";
import PropTypes from "prop-types";
import { Control, Form, actions, Errors } from "react-redux-form";
import { connect } from "react-redux";
import Styles from "./Login.Form.pcss";
import * as userActions from "../../redux/actions/Users";
import validator from "validator";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
  }

  render() {
    const isEmail = val => validator.isEmail(val);

    const maxLength = val => val && val.trim().length <= 15;

    const { errorMessage, profile } = this.props;

    return (
      <div>
        <Form
          hideNativeErrors
          model="userinfo"
          onSubmit={ userinfo => this.handleSubmit(userinfo) }
        >
          {
            errorMessage && <p>{errorMessage.error}</p>
          }
          {
            profile && <p>{profile[0].firstName}</p>
          }
          <Errors
            className="errors"
            model=".username"
            show="touched"
            messages={ {
              valueMissing: "Username is required",
              // maxLength: 'Must be 15 characters or less',
              isEmail: "Email is not correct format"
            } }
          />

          <Errors
            className="errors"
            model=".password"
            show="touched"
            messages={ {
              valueMissing: "Password is required"
            } }
          />
          <div className="form-group">
            <label htmlFor="userinfo.username">Email: </label>
            <Control.text
              type="email"
              model=".username"
              className="form-control"
              placeholder="Enter email"
              required
              validators={ {
                // maxLength: (val) => maxLength(val),
                isEmail: val => isEmail(val)
              } }
              validateOn="blur"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userinfo.password">Password: </label>
            <Control.text
              type="password"
              model=".password"
              className="form-control"
              placeholder="Enter password"
              required
              validateOn="blur"
            />
          </div>

          <button type="submit" className="btn btn-default">
            Login
          </button>
        </Form>

        <button className="btn btn-default" onClick={ this.getUserProfile }>
        Get Users
        </button>
      </div>
    );
  }

  handleSubmit(userinfo) {
    console.log(userinfo);
    // this.props.login("bing@gmail.com", "bing");
    this.props.login(userinfo.username, userinfo.password);

    // userActions.login()
  }

  getUserProfile() {
    const profile = this.props.getUserProfile({});

    console.log(profile);
  }
}

LoginForm.propTypes = {
  errorMessage: PropTypes.object,
  profile: PropTypes.array
};

const mapStateToProps = (state, props) => ({
  ...props,
  errorMessage: state.Users.errorMessage,
  profile: state.Users.profile
});

export default connect(mapStateToProps, userActions)(LoginForm);
