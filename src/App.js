import React, { Component } from 'react';

import Intro from './components/Intro/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

import './styles/layouts.css'

class App extends Component {

  render() {
    return (
      <div id="app">
        <Intro />
        <Experience />
        <Skills />
        <Projects /> 
        <Footer />       
      </div>
    );
  }
}

export default App;
