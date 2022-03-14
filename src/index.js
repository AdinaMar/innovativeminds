import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {AuthProvider} from '../src/components/loginForm/context/AuthProvider'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


