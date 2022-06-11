
function Header() {
  return (
    <header>
        <div id='logo'>Logo</div>
        <div id='navigation'>
          <ul className="nav nav-tabs">
          <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#shop">Shop</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#mobile">Mobile</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#religion">Religion</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#reklam">Reklam</a></li>
          </ul>          
        </div>
        <div id='user'>Login</div>

    </header>
  );
}

export default Header;
