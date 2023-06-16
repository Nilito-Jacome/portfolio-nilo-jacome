import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsLinkedin, BsInstagram, BsFacebook} from "react-icons/bs";


const Home = () => {
    return (
      <div>
        <h1 className="text-center">Bienvenidos a mi portafolio</h1>
        <Row>
          <Col md={4} lg={3}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="/Nilo3.jpeg" />
              <Card.Body>
                <Card.Title>Soy Nilo Ángel Jácome Riera</Card.Title>
                <Card.Text>
                  Ingeniero Eléctrico y Developer Front End.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item as={Link} to="https://linkedin.com/in/nilo-jácome-riera" target="_blank">
                    Linkedin 
                    <BsLinkedin />
                    </ListGroup.Item>
                <ListGroup.Item as={Link} to="https://www.instagram.com/nilitojacome/" target="_blank">
                    Instagram
                    <BsInstagram />
                    </ListGroup.Item>
                <ListGroup.Item as={Link} to="https://www.facebook.com/nilo.jacome/" target="_blank">
                    Facebook
                    <BsFacebook />
                    </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="">Descarga</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8} lg={9}>
            <Card.Header>Proyectos Principales</Card.Header>
            <Card className="" style={{ width: "100%" }}>
              <Card.Body>
                <Row>
                  <Card.Title>App Ecommerce</Card.Title>
                  <Col md={8} lg={9}>
                    <Card.Text className="pt-3">
                        <p>
                            Es una aplicación que simula una tienda online de compras, esta tiene diferentes productos para elegir.
                        </p>
                        <p>
                            Antes de iniciar sesión solo se puede buscar el producto, filtrar por categorías o ingresar a ver el detalle de cada uno de ellos.
                        </p>
                        <p>
                            Ya iniciada la sesión puedes añadir al carrito las cantidades que sean necesarias y de cualquier producto que desee, puede añadir varios productos, existen mensajes de alerta, puede visualizar los productos enviados al carrito, comprarlos o eliminarlos, también puede ver el historial de las compras realizadas en la tienda.
                        </p>
                        <p>
                            Para verificar su funcionamiento puede utilizar:
                        </p>       
                        <p>
                            nilitojacome@gmail.com
                        </p>          
                        <p>
                            najr1978.
                        </p> 
                    </Card.Text>
                  </Col>
                  <Col md={4} lg={3}>
                    <Row>
                      <Card.Img variant="top" src="/Ecommerce.PNG" />
                    </Row>
                    <Row>
                      <Button
                        variant="primary"
                        as={Link}
                        to="https://app-ecommerce-nilo.netlify.app/"
                        target="_blank"
                      >
                        Ver aplicación
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body>
                <Row>
                  <Card.Title>App Rick And Morty</Card.Title>
                  <Col md={8} lg={9}>
                    <Card.Text className="pt-3">
                      Es una aplicación para visualizar que personajes comparten
                      el mismo lugar de residencia, que nombres tienen y en que
                      episodios salen, su funcionamiento es randómico solo
                      actualizando la página, también puedes buscar los lugares
                      de residencia entre 1 y el 126.
                    </Card.Text>
                  </Col>
                  <Col md={4} lg={3}>
                    <Row>
                      <Card.Img variant="top" src="/Rick.PNG" />
                    </Row>
                    <Row>
                      <Button
                        variant="primary"
                        as={Link}
                        to="https://app-rickandmorty-nilo.netlify.app/"
                        target="_blank"
                      >
                        Ver aplicación
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default Home;