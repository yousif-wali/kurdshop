import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import Header from './Header';
import Footer from './Footer';
import Routing from "./Routing";
import { BrowserRouter } from 'react-router-dom';
//import { AuthProvider } from './AuthProvider';
import { Auth0Provider} from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));
let theYear = new Date().getFullYear();
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri = {window.location.origin}
    ><Header />
    </Auth0Provider>
    <BrowserRouter>
    <Routing />
    </BrowserRouter> 
   <Footer theYear={theYear}/>
  </React.StrictMode>
);
