import './page.css'
import axios from 'axios'
import {useState} from "react"
export default function Signup(){
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    
    function resetCredentials(){
        return ""
    }

    let message = ``;
    let validPassword, confirmPassword, validUserName, errMessage = false;
    function change(elem){
        elem = elem.target;
        let pwd = document.querySelector("input[data-input=password]").value
        switch(elem.getAttribute("data-input")){
            case "fullname":
                setFullname(elem.value);
                break;
            case "password":
                setPassword(elem.value);
            if(elem.value.length < 8){ 
                elem.classList.add("err")
                validPassword = false
                errMessage = true
                elem.classList.remove("complete")
                document.querySelector("form").classList.add("err")
            }else{ 
                elem.classList.remove("err")
                validPassword = true
                elem.classList.add("complete")
            }
                break;
            case "confirm-password":          
                if(elem.value !== pwd){ 
                    elem.classList.add("err")
                    confirmPassword = false
                    errMessage = true
                    elem.classList.remove("complete")
                    document.querySelector("form").classList.add("err")
                }else{
                    elem.classList.remove("err")
                    confirmPassword = true
                    elem.classList.add("complete")
                    document.querySelector("form").classList.add("err")
                }
                break;
            case "username":
                setUsername(elem.value)
                if(elem.value.length < 5){ 
                    elem.classList.add("err")
                    validUserName = false
                    errMessage = true
                    elem.classList.remove("complete")
                    document.querySelector("form").classList.add("err")
                }else{
                    elem.classList.remove("err")
                    validUserName = true
                    elem.classList.add("complete")
                    document.querySelector("form").classList.add("err")             
                }
                break;
            case "email":
                setEmail(elem.value);
                break;
            case "phone":
                setPhone(elem.value);
                break;
            case "dob":
                setDob(elem.value);
                break;
                default:
                    resetCredentials();
        }
        let id = elem.getAttribute("id")
        if(elem.value.length > 0){
            document.querySelector('label[for='+id+']').classList.add("active");
            elem.classList.add("active")
        }else{
            document.querySelector('label[for='+id+']').classList.remove("active");
            elem.classList.remove("active")
            elem.setAttribute("readonly", "");
        }
        if(!validUserName || !validPassword || !confirmPassword){
            message = "please fill boxes with proper information!!"
            errMessage = true
        }else{
            errMessage = false
        }
        if(validUserName && validPassword && confirmPassword){
            document.querySelector("form").classList.remove("err")
            document.querySelector("form").classList.add("complete")
        }else{
            document.querySelector("form").classList.add("err")
            document.querySelector("form").classList.remove("complete")
        }
        document.querySelector("dialog code").innerHTML = message.toUpperCase();

        if(errMessage){
            document.querySelector("dialog").style.display = "block"
        }else{
            document.querySelector("dialog").style.display = "none"

        }
    }
    function removeAttr(elem){
        elem.target.removeAttribute("readonly")
    }
    function closeDialog(elem){
        elem.target.parentNode.style.display = "none"
    }
    const submit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/api/register", {name: fullname, pwd: password, username: username, email: email, phone: phone, dob: dob});
    }
    return (
        <div className="account">
            <form style={{border: "2px solid orange"}} onSubmit={submit}>
            <div>
            <img src={require("./../image/logo/logo.png")} alt="logo" draggable="false"/>
            <p><u><b>With Us</b></u> Feel Secured.</p>
            <i style={{backgroundColor: "orange"}}></i>
            </div>
            <div>
            <dialog open id="dialog"><code>{message}</code> <span onClick={closeDialog}>&times;</span></dialog>
            <span>
            <input id="fullname" required type="text" readOnly onChange={change} onFocus={removeAttr} data-input="fullname"/>
            <label htmlFor="fullname">Full Name</label>
            </span>
            <span>
            <input id="email" required type="email" readOnly onChange={change} onFocus={removeAttr} data-input="email"/>
            <label htmlFor="email">Email</label>
            </span>
            <span>
            <input id="username" required type="text" readOnly onChange={change} onFocus={removeAttr} data-input="username"/>
            <label htmlFor="username">User Name</label>
            </span>
            <span>
            <input id="password" required  type="password" readOnly onChange={change} onFocus={removeAttr} data-input="password"/>
            <label htmlFor="password">Password</label>
            </span>
            <span>
            <input id="phone" type="tel" required pattern="^\d{3}-\d{3}-\d{4}$" readOnly onChange={change} onFocus={removeAttr} data-input="phone"/>
            <label htmlFor="phone">Phone</label>
            </span>
            <span>
            <input id="confirm-password" required type="password" readOnly onChange={change} onFocus={removeAttr} data-input="confirm-password"/>
            <label htmlFor="confirm-password">Confirm Password</label>
            </span>
            <span>
            <input id="dob" type="date" required readOnly onChange={change} onFocus={removeAttr} data-input="dob"/>
            <label htmlFor="dob">Date of birth</label>
            </span>
            <button>Sign up</button>
            <small><a href="#login" onClick={(e)=>{e.preventDefault(); window.location = "Login"}}>Login</a> if you have an Account.</small>
            </div>
            </form>
            
        </div>
    )
}