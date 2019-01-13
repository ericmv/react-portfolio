import React, { Component } from 'react';

import Intro from './components/Intro/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills/Skills';

import './layouts/layouts.css'

class App extends Component {

  render() {
    const skills = ['Python', 'Java', 'C++', 'Javascript', 'HTML']
    return (
      <div id="app">
        <Intro />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default App;
