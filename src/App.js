import React from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
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
    </div>
  );
}

export default App;
