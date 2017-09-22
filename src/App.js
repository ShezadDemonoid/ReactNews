import React, { Component } from 'react';
import logo from './logo.svg';
import { News } from './component/News';
import './styles/scss/index.css';

class App extends Component {
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container">
            <a className="navbar-brand text-light logo-font" >React News</a>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </nav>
      <News />
    </div>
    )
  }
}

export default App;
