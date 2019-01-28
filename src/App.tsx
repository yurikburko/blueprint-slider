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

          <div className="slider-wrapper">
              {/*RangeSlider looks roughly like this:*/}
              <MultiSlider>
                  <MultiSlider.Handle value={2} type="start" intentAfter={Intent.PRIMARY} />
                  <MultiSlider.Handle value={5} type="end" />
                  <MultiSlider.Handle value={6} type="start" intentAfter={Intent.WARNING} />
                  <MultiSlider.Handle value={8} type="end" />
              </MultiSlider>
          </div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
