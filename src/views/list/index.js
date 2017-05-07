import React, { Component } from 'react';

import MyInput from '../../components/MyInput';
import MyList from '../../components/MyList';

class List extends Component {
  render() {
    return (
      <div className="text-center">
        <MyList />
        <MyInput />
      </div>
    );
  }
}

export default List;
