import React, { Component } from 'react';
import './App.scss';
import 'antd-mobile/dist/antd-mobile.css';
import Router from './router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
