
function Header() {
  return (
    <header>
        <div id='logo'>Kurdshop</div>
        <div id='navigation'>
          <ul className="nav nav-tabs">
          <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#shop">Shop</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#mobile">Mobile</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#religion">Religion</a></li>
          <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#reklam">Reklam</a></li>
          </ul>          
        </div>
        <div id='user'>Login</div>

    </header>
  );
}

export default Header;
