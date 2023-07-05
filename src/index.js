import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {theme} from './Theme'
import { ThemeProvider } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>
);

