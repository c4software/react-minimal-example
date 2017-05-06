import React, { Component } from 'react';
import './App.css';

import Titre from './components/Titre';
import MyInput from './components/MyInput';
import MyList from './components/MyList';


var values = ["Valentin", "Laureline", "Marie", "Sylvie"];
class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Titre value="Bonjour Monde" />
        <hr />
        <MyList values={values} />
        <MyInput />
        <div className="note">Click the list to shuffle</div>
      </div>
    );
  }
}

export default App;
