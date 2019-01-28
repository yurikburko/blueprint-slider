import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MultiSlider } from "./slider/components";
import { Intent } from "./slider/common";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/*RangeSlider looks roughly like this:*/}
        <MultiSlider>
            <MultiSlider.Handle value={5} type="start" intentAfter={Intent.PRIMARY} />
            <MultiSlider.Handle value={80} type="end" />
        </MultiSlider>

      </div>
    );
  }
}

export default App;
