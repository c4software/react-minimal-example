import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux';

import routes from './routes';

store.dispatch({
  type: 'ADD_TO_LIST',
  text: "Example data"
})

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
