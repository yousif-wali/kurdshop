
function Header() {
  let bars = '≡'
  let close = 'x';
 function menu(elem){
  if(elem.target.innerHTML === bars)elem.target.innerHTML = close;
  else elem.target.innerHTML = bars;
  document.getElementById("nav").classList.toggle("active");
  document.getElementById("navigation").classList.toggle("active");

 }
  return (
    <header>
        <div id='logo'> Kurd Mega</div> 
        <div id='navigation'>
          <span id="menu" onClick={menu}>{bars}</span>
          <ul id="nav" className="nav nav-tabs">
          <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#shop">Shop</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#mobile">Mobile</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#religion">Uplode </a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#reklam">Reklam</a></li>
          <li className="nav-item"><a className="nav-link" href="#login">Login</a></li>
          </ul>   
        </div>

    </header>
  );
}

export default Header;
