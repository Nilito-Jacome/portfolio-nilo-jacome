import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBarPort = () => {


    return (
      <div>
        <Navbar bg="primary" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#" as={Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" as={Link} to="/about">
              Sobre mi
              </Nav.Link>
            <Nav.Link href="#action2" as={Link} to="/proyectos">
              Todos los Proyectos
              </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
};

export default NavBarPort;