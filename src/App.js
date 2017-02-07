import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example'

import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'
import reducers from './redux/reducers'




class App extends Component {
  render() {
    return (
       <Provider store={createStore(reducers)}>
        <Example />
      </Provider>
    );
  }
}

export default App;
