import App from './App';
import Shop from "./page/Shop"
import Mobile from './page/Mobile'
import Religion from './page/Religion'
import Reklam from './page/Reklam'
import Login from './page/Login'
import {  Route, Routes } from 'react-router-dom';

export default function Routing(){
    return(
        <div>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/page/Shop" element={<Shop/>}/>
        <Route path="/page/Mobile" element={<Mobile/>}/>
        <Route path="/page/Religion" element={<Religion/>}/>
        <Route path="/page/Reklam" element={<Reklam/>}/>
        <Route path="/page/Login" element={<Login/>}/>
    </Routes>
    </div>
    )
}