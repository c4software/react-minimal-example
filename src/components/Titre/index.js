import React, { Component } from 'react';

class Titre extends Component{
  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.counter(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  counter(){
    var newCount = this.state.count+1;
    this.setState({count: newCount});
  }

  render(){
    return (
      <h2>{this.state.count} - {this.props.value}</h2>
    )
  }
}

export default Titre;
