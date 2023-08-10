import "./Proyectos.css";
import {Link} from 'react-router-dom';

function Proyectos() {
  return (
    <div className="Proyectos">
      <div className="cards">
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">App Ecommerce</h1>
            <img className="foto" src="/Ecommerce.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">App Ecommerce</h1>
            <p className="info-card">
              Es una aplicación que simula una tienda online de compras, esta
              tiene diferentes productos para elegir.
              <br />
              Antes de iniciar sesión solo se puede buscar el producto, filtrar
              por categorías o ingresar a ver el detalle de cada uno de ellos.
              <br />
              Iniciada la sesión puedes añadir al carrito las cantidades que
              sean necesarias y de cualquier producto que desee, puede añadir
              varios productos, existen mensajes de alerta, puede visualizar los
              productos enviados al carrito, comprarlos o eliminarlos, también
              puede ver el historial de las compras realizadas en la tienda.
              <br />
              <br />
              Para verificar su funcionamiento puede utilizar:
              <br />
              nilitojacome@gmail.com
              <br />
              najr1978
            </p>
            <Link
              className="Aplication"
              to="https://app-ecommerce-nilo.netlify.app/"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">App Rick And Morty</h1>
            <img className="foto" src="/Rick.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">App Rick And Morty</h1>
            <p className="info-card">
              Es una aplicación para visualizar que personajes comparten el
              mismo lugar de residencia, que nombres tienen y en que episodios
              salen, su funcionamiento es randómico solo actualizando la página,
              también puedes buscar los lugares de residencia entre 1 y el 126.
            </p>
            <Link
              className="Aplication"
              to="https://app-rickandmorty-nilo.netlify.app/"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">SOCIAL MEDIA DASHBOARD</h1>
            <img className="foto" src="/social-dashboard.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">SOCIAL MEDIA DASHBOARD</h1>
            <p className="info-card">
              Es una aplicación donde se puede observar por mes la cantidad de
              seguidores, suscriptores, visitas y retweets que tiene una red
              social, para este caso tenemos facebook, youtube, instagram y
              twitter, existe también un darkmode para cambiar de claro a oscuro
              la vista de la pagina.
            </p>
            <Link
              className="Aplication"
              to="https://social-media-dashboard-n.netlify.app/"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">Memory with React</h1>
            <img className="foto" src="/memory-react.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">Memory with React</h1>
            <p className="info-card">
              Es una aplicación donde se puede ver el desarrollo de un juego
              para entrenar la memoria del cerebro, existe también un darkmode
              para cambiar de claro a oscuro la vista de la pagina.
            </p>
            <Link
              className="Aplication"
              to="https://memory-react-n.netlify.app"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">Four Card Frontend Mentor</h1>
            <img className="foto" src="/four-card.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">Four Card Frontend Mentor</h1>
            <p className="info-card">
              Es una aplicación donde se puede ver el desarrollo de buenas
              practicas junto con la aplicacion de la metodologia de BEM.
            </p>
            <Link
              className="Aplication"
              to="https://four-card-frontend-mentor.netlify.app"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">App de La Fortuna</h1>
            <img className="foto" src="/Fortune.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">App de La Fortuna</h1>
            <p className="info-card">
              Es una aplicación que muestra de manera randómica frases de
              proverbios, también varia de igual manera el fondo de la imagen.
            </p>
            <Link
              className="Aplication"
              to="https://fortune-cookies-nilo.netlify.app/"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <h1 className="title-card-1">App Para El Clima</h1>
            <img className="foto" src="/Clima.PNG" alt="" />
          </div>
          <div className="back">
            <h1 className="title-card-2">App Para El Clima</h1>
            <p className="info-card">
              Es una aplicación que indica el estado del clima donde se abre la
              aplicación, también se puede buscar como esta el clima en otros
              lugares como ciudades o países.
            </p>
            <Link
              className="Aplication"
              to="https://app-clima-nilo-jacome.netlify.app/"
              target="_blank"
            >
              Ver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proyectos;
