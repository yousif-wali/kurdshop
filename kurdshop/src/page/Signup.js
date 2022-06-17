import './page.css'
export default function Signup(){
    function change(elem){
        let id = elem.target.getAttribute("id")
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
            <form>
            <div>
            <img src={require("./../image/logo/logo.png")} alt="logo" draggable="false"/>
            <p><u><b>With Us</b></u> Feel Secured.</p>
            <i style={{backgroundColor: "orange"}}></i>
            </div>
            <div>
            <span>
            <input id="firstname" required type="text" readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="firstname">First Name</label>
            </span>
            <span>
            <input id="email" required type="email" readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="email">Email</label>
            </span>
            <span>
            <input id="lastname" required type="text" readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="lastname">Last Name</label>
            </span>
            <span>
            <input id="password" required  type="password" readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="password">Password</label>
            </span>
            <span>
            <input id="phone" type="tel" readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="phone">Phone</label>
            </span>
            <span>
            <input id="confirm-password" required type="password" readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="confirm-password">Confirm Password</label>
            </span>
            <span>
            <input id="dob" type="date" required readOnly onChange={change} onFocus={removeAttr}/>
            <label htmlFor="dob">Date of birth</label>
            </span>
            <input type="submit" value="Signup"/>
            <small><a href="#login" onClick={(e)=>{e.preventDefault(); window.location = "Login"}}>Login</a> if you have an Account.</small>
            </div>
            </form>
        </div>
    )
}