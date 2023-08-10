import './Navbar.css';

function Navbar () {
  return (
    <nav className="navbar">
      <div className="navbar-logo">(■‿■)  Hi!   Welcome</div>        
        <ul className="navbar-links">
          <li id='uno'>
            <div className='varios'><a href="/">Home</a></div>
            <div className='varios'><a href="#/proyectos">Proyectos</a></div>
            <div className='varios'><a href="#/about">About</a></div>
            <div className='varios'><a href="#/contact">Contact</a></div>
          </li>
        </ul>              
    </nav>
  );
}

export default Navbar;