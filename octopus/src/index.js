/*  How to deploy this to GitHub pages:
https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/ */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Main from './Main';

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

