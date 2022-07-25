import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {categories} from "./Data/Categories";

function Sublist(props){
  return categories[props.item].sublist.map((list, index)=>{
     return(
       <li key={index}>{list.category}</li>
     )
   })
   
}
function Header() {
  let bars = '≡'
  let close = 'x';
 function menu(elem){
  if(elem.target.innerHTML === bars)elem.target.innerHTML = close;
  else elem.target.innerHTML = bars;
  document.getElementById("nav").classList.toggle("active");
  document.getElementById("navigation").classList.toggle("active");

 }
 function keepActiveClass(string){
  if(string === "Login"){
    return window.location.href.includes(string) || window.location.href.includes("Signup") ? "nav-link active": "nav-link"
  }
  return window.location.href.endsWith(string) ? "nav-link active": "nav-link"
 }
  return (
    
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
              
                <li key={index}>{res.category}
                {
                  res.sublist && <ul><Sublist item={index}/></ul>
                }
                </li>
           
             )
            })
           } </ul>
        </li>


        
 

          <li className="nav-item"><a className={keepActiveClass("Mobile")} data-bs-toggle="tab" href="#mobile" onClick={(e)=>{e.preventDefault();window.location="/page/Mobile"}}>Mobile</a></li>
          <li className="nav-item"><a className={keepActiveClass("Delivery")} data-bs-toggle="tab" href="#delivery" onClick={(e)=>{e.preventDefault();window.location="/page/Delivery"}}>Delivery</a></li>
          <li className="nav-item"><a className={keepActiveClass("Cloud")} data-bs-toggle="tab" href="#uploud" onClick={(e)=>{e.preventDefault();window.location="/page/Cloud"}}>Cloud </a></li>
          <li className="nav-item"><a className={keepActiveClass("Reklam")} data-bs-toggle="tab" href="#reklam" onClick={(e)=>{e.preventDefault();window.location="/page/Reklam"}}>Reklam</a></li>
          
          {/* {(props.userinformation == null)? (
            <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{e.preventDefault();window.location="/page/Login"}}>Login</a></li>       
          ):(
            <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{e.preventDefault();props.userinformation = null}}>Lougout</a></li>       
          )
          }
             */
              }
              <LoginButton/>
              <LogoutButton/>
          </ul>  
          </nav>
         </div> 
      
    </header>
  );
}

export default Header;
