import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/nav.css';
import './assets/portfolio.css';
import './assets/about.css';
import './assets/contact.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
