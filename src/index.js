// Begining of default code

/*  import app from './app';
const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};

document.addEventListener('DOMContentLoaded', startApp);
  */


//  end of default code

//  Updated code with ReactJS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
