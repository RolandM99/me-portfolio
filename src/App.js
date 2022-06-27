import React from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
