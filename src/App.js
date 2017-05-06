import React, { Component } from 'react';
import './App.css';

class Titre extends Component{
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.counter = this.counter.bind(this);
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
      <h2 onClick={this.activateLasers}>{this.state.count} - {this.props.value}</h2>
    )
  }
}

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

const values = ["Valentin", "Laureline", "Marie", "Sylvie"];
class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Titre value="Hello World" />
        <hr />
        <MyList values={values} />
      </div>
    );
  }
}

export default App;
