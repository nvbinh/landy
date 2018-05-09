import React from "react";
import PropTypes from "prop-types";
// import {connect} from "react-redux";
import LoginForm from "./forms/Login.Form";

class LoginPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
          <LoginForm />
      </div>
    );
  }
}


// const mapStateToProps = (state, props) => {
//   return {
//     ...props
//   };
// };

export default LoginPage;
