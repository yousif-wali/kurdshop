import {useState} from "react"
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
 const [user, setUser] = useState({name: "", email: ""});
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
            <li> تۆتۆمبێل

            <ul>
                <li>Toyota</li>
                <li>Kia </li>
                <li>Nissan</li>
                <li>Bmw</li>
                <li>Shovrolet</li>
                <li>Honda</li>
                <li>Hiunda</li>
                <li>Porsh</li>
                <li>Jagware</li>
                <li>Opel</li>
                <li>Volkswagen</li>
                <li>Jeep</li>
                <li>Tesla</li>
                <li>Deer</li>
                <li>Bicycle</li>
                <li>Motorcycle</li>
              </ul>
            </li>
          <li>  مولك 
          <ul>
                <li>کرێ</li>
                <li>فرۆشتن</li>
                <li>شوقە</li>
                <li>دوکان</li>
                <li>زەوی بازرگانی</li>
                <li>زەوی کشتوکال</li>
                <li>مەزرەعه</li>
                <li>زەوی بۆکرێ</li>
              </ul>
            </li>  
          <li>زياتر</li>
           </ul> 
        </li>


        
 

          <li className="nav-item"><a className={keepActiveClass("Mobile")} data-bs-toggle="tab" href="#mobile" onClick={(e)=>{e.preventDefault();window.location="/page/Mobile"}}>Mobile</a></li>
          <li className="nav-item"><a className={keepActiveClass("Delivery")} data-bs-toggle="tab" href="#delivery" onClick={(e)=>{e.preventDefault();window.location="/page/Delivery"}}>Delivery</a></li>
          <li className="nav-item"><a className={keepActiveClass("Cloud")} data-bs-toggle="tab" href="#uploud" onClick={(e)=>{e.preventDefault();window.location="/page/Cloud"}}>Cloud </a></li>
          <li className="nav-item"><a className={keepActiveClass("Reklam")} data-bs-toggle="tab" href="#reklam" onClick={(e)=>{e.preventDefault();window.location="/page/Reklam"}}>Reklam</a></li>
          
          {(user.email === "")? (
            <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{e.preventDefault();window.location="/page/Login"}}>Login</a></li>       
          ):(
            <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{setUser({email: ""})}}>Lougout</a></li>       
          )
          }
            
          </ul>  
          </nav>
         </div> 
      
    </header>
  );
}

export default Header;
