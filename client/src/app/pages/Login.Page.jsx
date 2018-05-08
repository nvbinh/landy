import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Validate from "react-validate-form";

class LoginPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const rules = {
      required: {
        message: (field) => `${field} should be required`
      }
    };

    const validations = {
      inputEmail: ["required", "email"],
      inputPassword: ["required", "min:3", "max:10"]
    };

    return (
      <div className="col-md-6 col-md-offset-3">
        <Validate
          validations={validations}
          rules={rules}
        >
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail">Email: </label>
              <input type="email" className="form-control" name="inputEmail" id="inputEmail" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" name="inputPassword" id="inputPassword" placeholder="Enter password" />
            </div>
          </form>
        </Validate>
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
