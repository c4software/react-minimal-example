import React, { Component } from 'react';

class MyList extends Component {
  constructor(props){
    super(props);
    this.state = {values: props.values};
    this.shuffle = this.shuffle.bind(this);
  }
  createLi(){
    return this.state.values.map((v) =>
      <li key={v} onClick={this.shuffle}>{v}</li>
    );
  }
  shuffle(){
    console.log("Shuffle");
    this.setState({values: this.shuffleArray(this.props.values)})
  }
  shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }
  render(){
    return (
      <ul>{this.createLi()}</ul>
    );
  }
}

export default MyList;
