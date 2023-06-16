import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Contacto = () => {

    const [value1, setValue1] = useState ("")
    const [value2, setValue2] = useState ("")
    const [value3, setValue3] = useState ("")
   
    const handleSubmit = e => {
        const data = {
            name : value1,
            lastname : value2,
            email : value3,
            id : Date.naw(),
        }
        console.log(data)
        reset()
        e.preventDefault()
    }

    return (

      
        

        <Form style={{width:"80%"}} onSubmit={(e) => handleSubmit(e)}>
        <h1>contacto</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="name">Nombre</Form.Label>
            <Form.Control 
            type="nombre" 
            name='nombre' 
            id='nombre'
            placeholder="su nombre"
            value={value1}
            onChange={ (e) => setValue1(e.target.value)}
            required
            />

            <Form.Label htmlFor="lastname">Apellido</Form.Label>
            <Form.Control 
            type="apellido"
            name='apellido' 
            id='apellido'
            placeholder="su apellido"
            value={value2}
            onChange={ (e) => setValue1(e.target.value)}
            required
            />

            <Form.Label htmlFor="correo">Correo Electrónico</Form.Label>
            <Form.Control 
            type="correo" 
            name='correo' 
            id='correo'
            placeholder="nombre@ejemplo.com"
            value={value3}
            onChange={ (e) => setValue1(e.target.value)}
            required
            />

          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control type="mensaje" placeholder="escriba su mensaje" as="textarea" rows={3} />

          </Form.Group>
          <Button type="submit" variant="outline-primary">Enviar formulario</Button>
        </Form>
    
    );
};

export default Contacto;




