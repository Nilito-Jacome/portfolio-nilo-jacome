import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Proyectos = () => {
  return (
    <div>
      <Card.Header> Todos los Proyectos</Card.Header>
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
                <Card.Img variant="top" src="/Ecommerce.PNG"/>
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
        <Card.Body>
          <Row>
            <Card.Title>App Rick And Morty</Card.Title>
            <Col md={8} lg={9}>
              <Card.Text className="pt-3">
                Es una aplicación para visualizar que personajes comparten el
                mismo lugar de residencia, que nombres tienen y en que episodios
                salen, su funcionamiento es randómico solo actualizando la
                página, también puedes buscar los lugares de residencia entre 1
                y el 126.
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
        <Card.Body>
          <Row>
            <Card.Title>App Para El Clima</Card.Title>
            <Col md={8} lg={9}>
              <Card.Text className="pt-3">
              Es una aplicación que indica el estado del clima donde se abre la aplicación, también se puede buscar como esta el clima en otros lugares como ciudades o países.
              </Card.Text>
            </Col>
            <Col md={4} lg={3}>
              <Row>
                <Card.Img variant="top" src="/Clima.PNG" />
              </Row>
              <Row>
                <Button
                  variant="primary"
                  as={Link}
                  to="https://app-clima-nilo-jacome.netlify.app/"
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
            <Card.Title>App de La Fortuna</Card.Title>
            <Col md={8} lg={9}>
              <Card.Text className="pt-3">
              Es una aplicación que muestra de manera randómica frases de proverbios, también varia de igual manera el fondo de la imagen.
              </Card.Text>
            </Col>
            <Col md={4} lg={3}>
              <Row>
                <Card.Img variant="top" src="/Fortune.PNG" />
              </Row>
              <Row>
                <Button
                  variant="primary"
                  as={Link}
                  to="https://fortune-cookies-nilo.netlify.app/"
                  target="_blank"
                >
                  Ver aplicación
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Proyectos;
