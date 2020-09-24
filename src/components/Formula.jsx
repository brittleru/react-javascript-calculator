import React, {Component} from "react";
import "./Formula.jsx";

class Formula extends React.Component {
  render() {
    return <div className="formulaScreen">{this.props.formula}</div>;
  }
}

export default Formula;
