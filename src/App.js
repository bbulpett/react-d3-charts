import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import WorldMap from './WorldMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-D3 Infographic</h1>
        </header>
        <div>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
        <div>
          <WorldMap />
        </div>
      </div>
    );
  }
}

export default App;
