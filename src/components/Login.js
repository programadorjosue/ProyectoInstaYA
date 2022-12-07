import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>

    <Container>

     
      <Row>
        <Col></Col>


        <Col xs={5}>

            <h2>¡Hola de nuevo!</h2>
            <p>Bienvenido a tu organizador de tareas</p>
            <br/>
            
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control type="text"/>
        
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control type="password"/>
        <Form.Text className="text-muted">
          No compartiremos tus datos personales con nadie. Política de privacidad.
        </Form.Text>
      </Form.Group>
      
        <br/>


        <div align="center">
        <Button variant="success">Iniciar Sesión</Button>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>

      <div align="center">
      
          <p>¿Aún no tienes cuenta? Regístrate y disfruta de nuestros servicios. </p>
        
      


          <Button variant="outline-info">Registrarme</Button>


      </div>


    </Form>
        </Col>



        <Col></Col>
      </Row>


    </Container>

    </>


)}

export default Login