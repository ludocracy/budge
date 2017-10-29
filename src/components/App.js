import React, { Component } from 'react';
import Header from './Header';
import Account from './Account';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Account />
      </div>
    );
  }
}

export default App;
