import React, { Component } from 'react';
import '../styles/App.css';

import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>REDUX-FIRST-ROUTER simple example</h2>
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
