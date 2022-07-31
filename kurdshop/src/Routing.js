import App from './App';
import Shop from "./page/Shop"
import Mobile from './page/Mobile'
import Delivery from './page/Delivery'
import Reklam from './page/Reklam'
import Login from './page/_Login'
import Signup from './page/Signup'
import Cloud from './page/Cloud'
import Post from './page/Post'
import {  Route, Routes } from 'react-router-dom';
import {useState} from "react"


export default function Routing(){
    const [loggedin, setLoggedin] = useState({name: "", usernaem: "",email: ""});
    return(
        <div>
    <Routes>
        <Route exact path="/" element={<App name={loggedin} onNameChange={setLoggedin}/>}/>
        <Route path="/page/Shop" element={<Shop/>}/>
        <Route path="/page/Mobile" element={<Mobile/>}/>
        <Route path="/page/Delivery" element={<Delivery/>}/>
        <Route path="/page/Cloud" element={<Cloud/>}/>
        <Route path="/page/Post" element={<Post/>}/>
        <Route path="/page/Reklam" element={<Reklam/>}/>
        <Route path="/page/Login" element={<Login/>}/>
        <Route path="/page/Signup" element={<Signup/>}/>
    </Routes>
    </div>
    )
}