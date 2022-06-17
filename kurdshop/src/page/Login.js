import './page.css'
import {useState} from 'react'
export default function Login(){
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
  function change(elem){
    let id = elem.target.getAttribute("id")
    let input = elem.target.value;
    switch(elem.target.getAttribute("data-input")){
        case "name":
           setName(input);
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
    }
}
function removeAttr(elem){
    elem.target.removeAttribute("readonly")
}
    return (
      <div className="account">
       <form style={{border: "2px solid cyan"}}>
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