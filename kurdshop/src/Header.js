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
  return window.location.href.endsWith(string) ? "nav-link active": "nav-link"
 }
  return (
    <header>
        <div id='logo'> <img src={require("./image/logo/logo2.png")} alt="logo"/></div> 
        <div id='navigation'>
          <span id="menu" onClick={menu}>{bars}</span> 
          <nav>
          <ul id="nav" className="nav nav-tabs">                
          <li className="nav-item"><a className={keepActiveClass("/")} data-bs-toggle="tab" href="/" onClick={(e)=>{e.preventDefault();window.location="/"}}>Home</a></li>
          <li className="nav-item"><a className={keepActiveClass("Shop")} data-bs-toggle="tab" href="/page/Shop" onClick={(e)=>{e.preventDefault();window.location="/page/Shop"}}>Shop</a></li>
          <li className="nav-item"><a className={keepActiveClass("Mobile")} data-bs-toggle="tab" href="#mobile" onClick={(e)=>{e.preventDefault();window.location="/page/Mobile"}}>Mobile</a></li>
          <li className="nav-item"><a className={keepActiveClass("Religion")} data-bs-toggle="tab" href="#religion" onClick={(e)=>{e.preventDefault();window.location="/page/Religion"}}>Religion</a></li>
          <li className="nav-item"><a className={keepActiveClass("Reklam")} data-bs-toggle="tab" href="#reklam" onClick={(e)=>{e.preventDefault();window.location="/page/Reklam"}}>Reklam</a></li>
          <li className="nav-item"><a className={keepActiveClass("Login")} data-bs-toggle="tab" href="#login" onClick={(e)=>{e.preventDefault();window.location="/page/Login"}}>Login</a></li>         
          </ul>   
          </nav>
        </div>
    </header>
  );
}

export default Header;
