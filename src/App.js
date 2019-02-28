import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyWizard } from './MyWizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyWizard />
        </header>
      </div>
    );
  }
}

export default App;
