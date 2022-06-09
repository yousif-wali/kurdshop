import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header /> 
    <App /> 
   <Footer />
  </React.StrictMode>
);
reportWebVitals();
