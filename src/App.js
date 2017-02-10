import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore , combineReducers, applyMiddleware } from 'redux'
import reducers from './redux/reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)


class App extends Component {
  render() {
    return (
       <Provider store={store}>
        <Example />
      </Provider>
    );
  }
}

export default App;
