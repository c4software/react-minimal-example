import React, { Component } from 'react';
import "./index.css"
import { connect } from "react-redux"

class MyList extends Component {
  createLi(){
    return this.props.values.map((v) =>
      <li key={v} onClick={this.shuffle}>{v}</li>
    );
  }
  render(){
    return (
      <ul>{this.createLi()}</ul>
    );
  }
}

// « Connect » the props values to the « store »
function mapStateToProps(state) {
  return { values: state }
}

// Tell to react-redux to connect.
export default connect(mapStateToProps)(MyList)
