import { createStore } from 'redux'

let DEFAULT_STAT = [];

function list(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return state.concat([action.text])
    default:
      return state
  }
}

let store = createStore(list, DEFAULT_STAT)

export default store;
