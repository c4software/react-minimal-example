import React, { Component } from 'react';

class MyInput extends Component{
  handleChange(e){
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  }
  render(){
    return (
      <input defaultValue="" placeholder="Enter data and press enter" onKeyPress={this.handleChange} type="text" />
    )
  }
}

export default MyInput;
