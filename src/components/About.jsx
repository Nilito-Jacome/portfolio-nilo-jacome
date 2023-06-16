import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const About = () => {
    return (
      <div>
        <Card style={{ width: "90%" }}>
          <h1>A cerca de mi</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              La programación es una disciplina que ha revolucionado el mundo en
              las últimas décadas. Desde los primeros lenguajes de programación
              hasta las sofisticadas aplicaciones y sistemas que utilizamos hoy
              en día, la programación ha permitido la automatización de tareas,
              la creación de software y el avance de la tecnología en general,
              siendo Ingeniero Eléctrico de profesión he encontrado en la
              programación una forma de creación y tal vez quien sabe algún día
              poder construir una aplicaciónque ayude a la humanidad.
            </ListGroup.Item>
            <ListGroup.Item>
              Me gustan las novedades tecnológicas y los avances que ha tenido
              la ciencia, siempre que tengo tiempo estoy investigando cosas
              nuevas.
            </ListGroup.Item>
            <ListGroup.Item>
              Soy una persona tranquila, hogareña, me gusta el futbol(soccer),
              las películas de acción, ciencia ficción, vivo en Quito, Ecuador.
            </ListGroup.Item>
            <ListGroup.Item>
              Estudié mi carrera de ingeniería eléctrica en la Universidad
              Politécnica Salesiana.
            </ListGroup.Item>
            <ListGroup.Item>
              Actualmente estoy estudiando en Academlo de manera online, para
              ser Desarrollador Web Full-Stack y ciencias de la computación,
              potenciando y reforzando los conocimientos que adquirí en años
              anteriores de manera autodidacta.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
};

export default About;