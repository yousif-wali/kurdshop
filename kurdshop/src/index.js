import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

let theYear = new Date().getFullYear();
root.render(
  <React.StrictMode>
    <Header /> 
    <App /> 
   <Footer theYear={theYear}/>
  </React.StrictMode>
);
reportWebVitals();
