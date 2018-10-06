import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h3>Yuto Tachibana's Portfolio</h3>
        </div>
        <div className="main-content">
          <div className="sub-content bio">
            <span className="content-title">bio</span>
          </div>
          <div className="sub-content skill">
            <span className="content-title">skill</span>
          </div>
          <div className="sub-content work">
            <span className="content-title">works</span>
          </div>
          <div className="sub-content photo">
            <span className="content-title">photo</span>
          </div>
          <div className="sub-content sns">
            <span className="content-title">sns</span>
          </div>
        </div>
        <div className="footer">
          <p>copyright 2018- Yuto Tachibana</p>
        </div>
      </div>
    );
  }
}

export default App;
