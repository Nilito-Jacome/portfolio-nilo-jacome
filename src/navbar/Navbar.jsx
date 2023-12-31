import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="saludo">
        <div className="icono">
          <img src="./icon/etiqueta.png" alt="" />
        </div>
        <div className="navbar-logo">Hi! Welcome</div>
      </div>

      <ul className="navbar-links">
        <h1 className="menu">Here</h1>
        <li id="uno">
          <div className="varios">
            <a href="/">Home</a>
          </div>
          <div className="varios">
            <a href="#/proyectos">Projects</a>
          </div>
          <div className="varios">
            <a href="#/about">About</a>
          </div>
          <div className="varios">
            <a href="#/contact">Contact</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
