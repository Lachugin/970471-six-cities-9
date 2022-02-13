import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const NUMBER_OF_ADS = 10;

ReactDOM.render(
  <React.StrictMode>
    <App ads={NUMBER_OF_ADS} />
  </React.StrictMode>,
  document.getElementById('root'));
