// import deafault react and react-router components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
// render
ReactDOM.render(
  <React.StrictMode>
  // BrowserRouter shows in which js file the routing will take place
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
