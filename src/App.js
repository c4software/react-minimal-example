import React, { Component } from 'react';
import './App.css';

import Titre from './components/Titre';
import MyInput from './components/MyInput';
import MyList from './components/MyList';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Titre value="Bonjour Monde" />
        <hr />
        <MyList />
        <MyInput />
      </div>
    );
  }
}

export default App;
