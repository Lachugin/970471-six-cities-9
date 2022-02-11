import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const numberOfAds = {
  ADS: 10,
};

ReactDOM.render(
  <React.StrictMode>
    <App ads={numberOfAds.ADS} />
  </React.StrictMode>,
  document.getElementById('root'));
