import React, { Component } from 'react';
import "./index.css"

import {add_to_list} from "../../actions";

class MyInput extends Component{
  handleChange(e){
    if (e.key === 'Enter') {
      if(e.target.value){
        add_to_list(e.target.value);
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
