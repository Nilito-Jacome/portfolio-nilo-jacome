import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const About = () => {
    return (
      <div>
         <h1>A cerca de mi</h1>
        <Card style={{ width: "100%"}}>
          <ListGroup variant="flush">
            <div className='info'>
            <ListGroup.Item>
              La programación es una disciplina que ha revolucionado el mundo en
              las últimas décadas. Desde los primeros lenguajes de programación
              hasta las sofisticadas aplicaciones y sistemas que utilizamos hoy
              en día, la programación ha permitido la automatización de tareas,
              la creación de software y el avance de la tecnología en general,
              siendo Ingeniero Eléctrico de profesión he encontrado en la
              programación una forma de creación y tal vez quien sabe algún día
              poder construir una aplicación que ayude a la humanidad.
            </ListGroup.Item>
            <ListGroup.Item>
              Me gustan las novedades tecnológicas y los avances que ha tenido la ciencia, siempre estoy investigando cosas nuevas.
            </ListGroup.Item>
            <ListGroup.Item>
              Soy una persona tranquila, hogareña, me gustan las películas de acción, ciencia ficción, el futbol(soccer), vivo en el Distrito Metropolitano de Quito, Ecuador.
            </ListGroup.Item>
            <ListGroup.Item>
              Mi carrera de ingeniería eléctrica la curse en la Universidad
              Politécnica Salesiana.
            </ListGroup.Item>
            </div>
          </ListGroup>
        </Card>
      </div>
    );
};

export default About;