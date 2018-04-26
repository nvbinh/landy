import React from "react";
import {connect} from "react-redux";
import Header from "./app/components/Header";
import {mapDispatchToProps} from "./app/redux/stores/Store";

class Front extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log(this.props.users);
  }

  render() {
    console.log(this.props.users);
    return (
      <div className="page">
        this is content page
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    users: state.Users.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Front);