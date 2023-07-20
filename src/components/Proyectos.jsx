import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Proyectos = () => {
  return (
    <div>
      <h1>Todos los Proyectos</h1>
      <Card className="projects">
        <Card.Body className="tot">
          <Card.Title className="title-t">App Ecommerce</Card.Title>
          <Card.Text className="parrafo-t">
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
          <div className="tarjet">
            <Card.Img
              className="foto"
              variant="top"
              src="/Ecommerce.PNG"
              width="100"
              height="100"
            />
            <Button
              type="button"
              className="boton btn-sm"
              variant="primary"
              as={Link}
              to="https://app-ecommerce-nilo.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
        </Card.Body>

        <Card.Body className="tot">
          <Card.Title className="title-t">App Rick And Morty</Card.Title>
          <Card.Text className="parrafo-t">
            Es una aplicación para visualizar que personajes comparten el mismo
            lugar de residencia, que nombres tienen y en que episodios salen, su
            funcionamiento es randómico solo actualizando la página, también
            puedes buscar los lugares de residencia entre 1 y el 126.
          </Card.Text>
          <div className="tarjet">
            <Card.Img
              className="foto"
              variant="top"
              src="/Rick.PNG"
              width="100"
              height="100"
            />
            <Button
              type="button"
              className="boton btn-sm"
              variant="primary"
              as={Link}
              to="https://app-rickandmorty-nilo.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
        </Card.Body>

        <Card.Body className="tot">
          <Card.Title className="title-t">App Para El Clima</Card.Title>
          <Card.Text className="parrafo-t">
            Es una aplicación que indica el estado del clima donde se abre la
            aplicación, también se puede buscar como esta el clima en otros
            lugares como ciudades o países.
          </Card.Text>
          <div className="tarjet">
            <Card.Img
              className="foto"
              variant="top"
              src="/Clima.PNG"
              width="100"
              height="100"
            />
            <Button
              type="button"
              className="boton btn-sm"
              variant="primary"
              as={Link}
              to="https://app-clima-nilo-jacome.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
        </Card.Body>

        <Card.Body className="tot">
          <Card.Title className="title-t">App de La Fortuna</Card.Title>
          <Card.Text className="parrafo-t">
            Es una aplicación que muestra de manera randómica frases de
            proverbios, también varia de igual manera el fondo de la imagen.
          </Card.Text>
          <div className="tarjet">
            <Card.Img
              className="foto"
              variant="top"
              src="/Fortune.PNG"
              width="100"
              height="100"
            />
            <Button
              type="button"
              className="boton btn-sm"
              variant="primary"
              as={Link}
              to="https://fortune-cookies-nilo.netlify.app/"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
        </Card.Body>
        <Card.Body className="tot">
          <Card.Title className="title-t">Four Card Frontend Mentor</Card.Title>
          <Card.Text className="parrafo-t">
            Es una aplicación donde se puede ver el desarrollo de buenas practicas junto con la aplicacion de la metodologia de BEM.
          </Card.Text>
          <div className="tarjet">
            <Card.Img
              className="foto"
              variant="top"
              src="/four-card.PNG"
              width="100"
              height="100"
            />
            <Button
              type="button"
              className="boton btn-sm"
              variant="primary"
              as={Link}
              to="https://four-card-frontend-mentor.netlify.app"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
        </Card.Body>
        <Card.Body className="tot">
          <Card.Title className="title-t">Memory with React</Card.Title>
          <Card.Text className="parrafo-t">
            Es una aplicación donde se puede ver el desarrollo de un juego para entrenar la memoria del cerebro.
          </Card.Text>
          <div className="tarjet">
            <Card.Img
              className="foto"
              variant="top"
              src="/memory-react.PNG"
              width="100"
              height="100"
            />
            <Button
              type="button"
              className="boton btn-sm"
              variant="primary"
              as={Link}
              to="https://memory-react-n.netlify.app"
              target="_blank"
            >
              Ver aplicación
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Proyectos;
