import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'; // for use on Github pages
import './index.css';
import App from './App';
import ScrollToTop from './ScrollToTop'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
