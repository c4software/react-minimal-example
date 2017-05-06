import { createStore } from 'redux'

function list(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return state.concat([action.text])
    default:
      return state
  }
}

let store = createStore(list, [])

export default store;
