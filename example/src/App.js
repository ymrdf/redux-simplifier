import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/Button.js';
import Counter from './component/Counter.js';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Redux-samplifier</h1>
          </header>
          <Counter />
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
