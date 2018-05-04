import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class LoginPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email: </label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" />
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    ...props
  };
};

export default connect(mapStateToProps)(LoginPage);
