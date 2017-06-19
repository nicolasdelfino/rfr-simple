import React, { Component } from 'react';
import '../styles/App.css';

import Menu from './Menu'
import ContentWrapper from './ContentWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>REDUX-FIRST-ROUTER - basic example</p>
          <Menu />
        </div>
        
        <ContentWrapper />
      </div>
    );
  }
}

export default App;
