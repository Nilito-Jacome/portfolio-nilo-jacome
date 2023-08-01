import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className="title1">Bienvenidos a mi portafolio</h1>
      <div className="home">
        <Card className="name">
          <Card.Img className="nilo" variant="top" src="/Nilo.png" width="10" height="200" />
          <Card.Body className="soy">
            <Card.Title>Soy Nilo Ángel Jácome Riera</Card.Title>
            <Card.Text>
              DEVELOPER WEB FULL-STACK
              <br />
              INGENIERO ELÉCTRICO.
            </Card.Text>
          </Card.Body>
        </Card>

        <ListGroup className="list-group-flush">
          <ListGroup.Item
            className="linkedin"
            as={Link}
            to="https://linkedin.com/in/nilo-jácome-riera"
            target="_blank"
          >
            Linkedin
            <BsLinkedin />
          </ListGroup.Item>
          <ListGroup.Item
            className="instagram"
            as={Link}
            to="https://www.instagram.com/nilitojacome/"
            target="_blank"
          >
            Instagram
            <BsInstagram />
          </ListGroup.Item>
          <ListGroup.Item
            className="facebook"
            as={Link}
            to="https://www.facebook.com/nilo.jacome/"
            target="_blank"
          >
            Facebook
            <BsFacebook />
          </ListGroup.Item>
          <Card.Body className="cont">
            <Card.Img
              className="picture"
              variant="top"
              src="/usuario1.png"              
            />
            <Card.Link 
            className="desc"
             href="/Nilo_cv.pdf" 
             target="_blank">
              Descargar cv
            </Card.Link>

            <Card.Link
              className="repo"
              as={Link}
              to="https://github.com/Nilito-Jacome?tab=repositories"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
               Repositorio github
            </Card.Link>

            <Card.Link
              className="date"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              Datos de Contacto
            </Card.Link>
            <Modal show={show} onHide={handleClose} size="sm">
              <Modal.Header>
                <Modal.Title>Datos de contacto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Email: nilitojacome@gmail.com
                <br />
                Cel: +593-099-897-1284
              </Modal.Body>
              <Modal.Footer>
                <Card.Link
                  variant="secondary"
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                >
                  Close
                </Card.Link>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </ListGroup>

        <div id="file-override-custom" className="container">
          <h1 className="title_home">Proyectos Principales</h1>
          <Card.Body className="tot1">
          <Card.Title className="title">App Ecommerce</Card.Title>
          <Card.Text className="parrafo-t1">
            Es una aplicación que simula una tienda online de compras, esta
            tiene diferentes productos para elegir.
            <br />
            Antes de iniciar sesión solo se puede buscar el producto, filtrar
            por categorías o ingresar a ver el detalle de cada uno de ellos.
            <br />
            Iniciada la sesión puedes añadir al carrito las cantidades que sean
            necesarias y de cualquier producto que desee, puede añadir varios
            productos, existen mensajes de alerta, puede visualizar los
            productos enviados al carrito, comprarlos o eliminarlos, también
            puede ver el historial de las compras realizadas en la tienda.
            <br />
            <br />
            Para verificar su funcionamiento puede utilizar:
            <br />
            nilitojacome@gmail.com
            <br />
            najr1978
          </Card.Text>
          <div className="tarjet1">
            <Card.Img
              className="foto1"
              variant="top"
              src="/Ecommerce.PNG"
            />
            <Button
              type="button"
              className="boton1 btn-sm"
              variant="primary"
              as={Link}
              to="https://app-ecommerce-nilo.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
          </Card.Body>

          <Card.Body className="tot2">
          <Card.Title className="title">App Rick And Morty</Card.Title>
          <Card.Text className="parrafo-t2">
            Es una aplicación para visualizar que personajes comparten el mismo
            lugar de residencia, que nombres tienen y en que episodios salen, su
            funcionamiento es randómico solo actualizando la página, también
            puedes buscar los lugares de residencia entre 1 y el 126.
          </Card.Text>
          <div className="tarjet1">
            <Card.Img
              className="foto1"
              variant="top"
              src="/Rick.PNG"
            />
            <Button
              type="button"
              className="boton1 btn-sm"
              variant="primary"
              as={Link}
              to="https://app-rickandmorty-nilo.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
          </Card.Body>

          <Card.Body className="tot3">
          <Card.Title className="title">SOCIAL MEDIA DASHBOARD</Card.Title>
          <Card.Text className="parrafo-t3">
          Es una aplicación donde se puede observar por mes la cantidad de seguidores, suscriptores, visitas y retweets que tiene una red social, para este caso tenemos facebook, youtube, instagram y twitter,  existe también un darkmode para cambiar de claro a oscuro la vista de la pagina.
          </Card.Text>
          <div className="tarjet1">
            <Card.Img
              className="foto1"
              variant="top"
              src="/social-dashboard.PNG"
            />
            <Button
              type="button"
              className="boton1 btn-sm"
              variant="primary"
              as={Link}
              to="https://social-media-dashboard-n.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
          </Card.Body>
          
        </div>

      </div>
    </div>
  );
};

export default Home;
