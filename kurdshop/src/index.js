import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import Header from './Header';
import Footer from './Footer';
import Routing from "./Routing";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

let theYear = new Date().getFullYear();
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
    <Routing />
    </BrowserRouter> 
   
   <Footer theYear={theYear}/>
  </React.StrictMode>
);
