import React from "react";
import { connect } from "react-redux";
import Header from "./app/components/Header";
// import {mapDispatchToProps} from "./app/redux/stores/Store";
import * as userActions from "./app/redux/actions/Users";
// import * as creatorActions from "./app/redux/actions/Actions";

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
      <div className="page">
        this is content page
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
  user: state.Users.user
});

export default connect(mapStateToProps, userActions)(Front);
