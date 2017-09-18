import React, { Component } from 'react';
import logo from './logo.svg';
import { News } from './component/News';
import './styles/css/Body.css'

class App extends Component {
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dRK  bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" >REACTNEWS</a>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </nav>
      <News />
    </div>
    )
  }
}

export default App;
