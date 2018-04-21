import React from "react";
import {connect} from "react-redux";
import Header from "./app/components/Header";

class Front extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        this is content page
      </div>
    )
  }
}

export default Front;