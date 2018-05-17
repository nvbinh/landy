import React from "react";
import { connect } from "react-redux";
import * as userActions from "./app/redux/actions/Users";
import News from "./app/components/News";
import Right from "./app/components/Right";

class Front extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    // console.log(this.props.users);
  }

  render() {
    console.log(this.props.user);
    return (
      <React.Fragment>
        <div
          className="page"
          role="main">
          <div className="py-5 bg-light">
            <div className="container-fluid land-container">
              <div className="row">
              <div className="col-md-3 order-md-2 mb-4">
                <Right />
              </div>
              <div className="col-md-9 order-md-1">
                <News />
              </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  user: state.Users.user
});

export default connect(mapStateToProps, userActions)(Front);
