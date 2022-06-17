import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import Header from './Header';
import Footer from './Footer';
import Routing from "./Routing";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

let theYear = new Date().getFullYear();
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Header />
    <BrowserRouter>
    <Routing />
    </BrowserRouter> 
    </AuthProvider>
   <Footer theYear={theYear}/>
  </React.StrictMode>
);
