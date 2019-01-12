import React, { Component } from 'react';

import Intro from './components/Intro/Intro';
import Experience from './components/Experience';

import './layouts/layouts.css'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Intro />
        <Experience />
      </div>
    );
  }
}

export default App;
