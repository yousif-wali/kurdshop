import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Shop from "./page/Shop";
import Routing from "./Routing";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
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
