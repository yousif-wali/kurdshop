import './page.css'
import {useState, useContext} from 'react'
import axios from '../api/axios';
import AuthContext from '../AuthProvider';
export default function Login({name , onNameChange}){
    const [fullname, setFullname] = useState("");
    const [pwd, setPwd] = useState("");
    const {setAuth} = useContext(AuthContext);
  function change(elem){
    let id = elem.target.getAttribute("id")
    let input = elem.target.value;
    switch(elem.target.getAttribute("data-input")){
        case "name":
           setFullname(input);
            break;
        case "password":
           setPwd(input);
            break;
            default:
    }
    if(elem.target.value.length > 0){
        document.querySelector('label[for='+id+']').classList.add("active");
        elem.target.classList.add("active")
    }else{
        document.querySelector('label[for='+id+']').classList.remove("active");
        elem.target.classList.remove("active")
        elem.target.setAttribute("readonly", "");
  }}

function removeAttr(elem){
    elem.target.removeAttribute("readonly")
}
const userLogin = async e=>{
    e.preventDefault();
    try{
        const response = await axios.post(`http://localhost:80/kurdshop_api/login.php?name=${fullname}&pwd=${pwd}`,
        JSON.stringify({name: fullname, pwd}),
        {
            headers: {"Content-Type": "application/json"},
            widthCredentials: true,
        }
        );
        console.log(JSON.stringify(response?.data));
        setAuth({fullname, pwd})
    }catch(e){
        console.error(e.message)
    }
   // axios.post(`http://localhost:80/kurdshop_api/login.php?name=${fullname}&pwd=${pwd}`, (res, err)=>{res.redirect("/")}).then(res=>{console.log(res);})
   // fetch(`http://localhost:80/kurdshop_api/test.php?type=login&username=${name}&pwd=${pwd}`).then(res => res.json())
}
    return (
      <div className="account">
       <form style={{border: "2px solid cyan"}} onSubmit={userLogin}>
        <div>
        <img src={require("./../image/logo/logo.png")} alt="logo" draggable="false"/>
        <p><u><b>With Us</b></u> Feel Secured</p>
        <i style={{backgroundColor: "cyan"}}></i>
        </div>
        <div>
        <span>
        <input id="username" required type="text" readOnly onChange={change} onFocus={removeAttr} data-input="name"/>
        <label htmlFor="username">User/Email/Phone</label>
        </span>
        <span>
        <input id="password" required type="password" readOnly onChange={change} onFocus={removeAttr} data-input="password"/>
        <label htmlFor="password">Password</label>
        </span>
        <button>Login</button>
        <small>Don't have an account?<a href="#singup" onClick={(e)=>{e.preventDefault(); window.location = "Signup"}}>Create an Account.</a></small>
        </div>
       </form>
      </div>
      );
}