import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {categories} from "./Data/Categories";
import Profile from "./Profile"

function Sublist(props){
  return categories[props.item].sublist.map((list, index)=>{
     return(
       <li key={index} onClick={requestHeader} data-index={index} data-type="sublist">{list.category}</li>
     )
   })
   
}
const requestHeader = e =>{
  let id =e.target.getAttribute("data-index");
  let sublist = e.target.getAttribute("data-type");
  let parent = e.target.parentNode.parentNode.getAttribute("data-index");
  if(sublist){
    let sublistRequest = categories[parent].sublist[id].request;
    if(sublistRequest !== undefined){
    window.location.href = window.location.origin + window.location.pathname + "?req="+ sublistRequest;
    }
  }else{
  if( categories[id].request !== undefined ){
    window.location.href = window.location.origin + window.location.pathname + "?req="+ categories[id].request
  }
}
}
let bars = '≡'
let close = 'x';
export function menu(elem){
 if(elem.target.innerHTML === bars)elem.target.innerHTML = close;
 else elem.target.innerHTML = bars;
 document.getElementById("nav").classList.toggle("active");
 document.getElementById("navigation").classList.toggle("active");

}
function Header() {
 function keepActiveClass(string){
  if(string === "Login"){
    return window.location.href.includes(string) || window.location.href.includes("Signup") ? "nav-link active": "nav-link"
  }
  return window.location.href.includes(string) ? "nav-link active": "nav-link"
 }
  return (
    <>
    <header>
        <div id='logo'> <img src={require("./image/logo/logo2.png")} alt="logo" draggable="false"/></div> 
        <div id='navigation'>
          <span id="menu" onClick={menu}>{bars}</span> 
          <nav>
          <ul id="nav" className="nav nav-tabs">                
          <li className="nav-item"><a className={keepActiveClass("/")} data-bs-toggle="tab" href="/" onClick={(e)=>{e.preventDefault();window.location="/"}}>Home</a></li>
          <li className="nav-item"><a className={keepActiveClass("Shop")} data-bs-toggle="tab" href="/page/Shop" onClick={(e)=>{e.preventDefault();window.location="/page/Shop"}}>Shop</a>
          <ul>
            {
             categories.map((res, index)=>{
            return (
              
                <li key={index} data-index={index} onClick={requestHeader} >{res.category}
                {
                  res.sublist && <ul><Sublist item={index}/></ul>
                }
                </li>
           
             )
            })
           } </ul>
        </li>
        <li className="nav-item"><a className={keepActiveClass("Cloud")} data-bs-toggle="tab" href="#uploud" onClick={(e)=>{e.preventDefault();window.location="/page/Cloud"}}>Cloud </a></li>
      
          {/* {(props.userinformation == null)? (
            <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{e.preventDefault();window.location="/page/Login"}}>Login</a></li>       
          ):(
            <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{e.preventDefault();props.userinformation = null}}>Lougout</a></li>       
          )
          }
             */
              }
          </ul>  
          </nav>
         </div> 
          <div className="profile-icon" onClick={()=>{document.getElementById("profile").classList.toggle("active")}}><i className="fa fa-user"></i></div>
      
    </header>
    <span id="profile">
      <h3>Profile</h3>
    <div id="userinformation">
    <Profile/>
    </div>
    <div id="credential-button">
    <LoginButton/>
    <LogoutButton/>
    </div>
    </span>
    </>
  );
}

export default Header;
