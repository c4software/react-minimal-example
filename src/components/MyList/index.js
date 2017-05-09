import React, { Component } from 'react';
import "./index.css"
import { connect } from "react-redux"

class MyList extends Component {
  createLi(){
    return this.props.values.map((v) =>
      <li key={v}>{v}</li>
    );
  }
  render(){
    return (
      <ul>{this.createLi()}</ul>
    );
  }
}

// « Connect » the props values to the « store »
export default connect(function(state){
  return { values: state }
})(MyList)
