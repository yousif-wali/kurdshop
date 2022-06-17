import App from './App';
import Shop from "./page/Shop"
import Mobile from './page/Mobile'
import Delivery from './page/Delivery'
import Reklam from './page/Reklam'
import Login from './page/Login'
import Signup from './page/Signup'
import Cloud from './page/Cloud'
import {  Route, Routes } from 'react-router-dom';

export default function Routing(){
    return(
        <div>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/page/Shop" element={<Shop/>}/>
        <Route path="/page/Mobile" element={<Mobile/>}/>
        <Route path="/page/Delivery" element={<Delivery/>}/>
        <Route path="/page/Cloud" element={<Cloud/>}/>
        <Route path="/page/Reklam" element={<Reklam/>}/>
        <Route path="/page/Login" element={<Login/>}/>
        <Route path="/page/Signup" element={<Signup/>}/>
    </Routes>
    </div>
    )
}