import React, { Component } from 'react';
import './App.css';
import './Navbar';
import Navbar from './Navbar';
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Button />
      </div>
    );
  }
}


export default App;
