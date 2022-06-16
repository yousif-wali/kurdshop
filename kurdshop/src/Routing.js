import App from './App';
import Shop from "./page/Shop"
import { BrowserRouter , Route, Routes } from 'react-router-dom';

export default function Routing(){
    return(
        <div>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/page/Shop" element={<Shop/>}/>
    </Routes>
    </div>
    )
}