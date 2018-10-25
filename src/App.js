import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './BasicExample.js'

class App extends Component {
  render() {
    return (
      <div> 
        <h1>1. BasicExample</h1>
        <BasicExample></BasicExample>
      </div>
    );
  }
}

export default App;
