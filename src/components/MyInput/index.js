import React, { Component } from 'react';
import "./index.css"

import store from "../../redux";

class MyInput extends Component{
  handleChange(e){
    if (e.key === 'Enter') {
      if(e.target.value){
        store.dispatch({
          type: 'ADD_TO_LIST',
          text: e.target.value
        })
        e.target.value = "";
      }
    }
  }
  render(){
    return (
      <input defaultValue="" placeholder="Enter data and press enter" onKeyPress={this.handleChange} type="text" />
    )
  }
}

export default MyInput;
