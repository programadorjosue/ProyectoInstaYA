import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TablaInfo from './TablaInfo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxesPacking} from "@fortawesome/free-solid-svg-icons";

const initialForm = {cityR:"", dirR:"", nameR:"", tipoP:"", cityD:"", dirD:"", nameD:"", celD:"",  _id:""}

function Formulario({db, obtenerTareas,  eliminarTarea}) {
    const [form, setForm] = useState(initialForm)
    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        if(form._id){
          fetch(`/api/task/${form._id}`, {
            method: "PUT",
            body: JSON.stringify({
              cityR: form.cityR,
              dirR: form.dirR,
              nameR: form.nameR,
              tipoP: form.tipoP,
              cityD: form.cityD,
              dirD: form.dirD,
              nameD: form.nameD,
              celD: form.celD
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
            alert("Paquete editado");
            obtenerTareas();
            setForm(initialForm) 
        
        }else{
          fetch("/api/task", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          }
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
            setForm(initialForm) 
            obtenerTareas();
            
        };
        }

        function editarTarea(id) {
          fetch(`/api/task/${id}`)
            .then((res) => res.json())
            .then((data) => {
              console.log({ data });
              setForm({
                cityR: data.cityR,
                dirR: data.dirR,
                nameR: data.nameR,
                tipoP: data.tipoP,
                cityD: data.cityD,
                dirD: data.dirD,
                nameD: data.nameD,
                celD: data.celD,
                _id: data._id
              });
              
            });
          obtenerTareas();
        }  

  return (
    <>


    {/* <Container>
      <Row>
      <Col sm={4}></Col>
       <Col sm={4}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre de la tarea:</Form.Label>
        <Form.Control 
        type="text" 
        name="title" 
        value={form.title} 
        onChange={handleChange}
        /> 
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control 
        as="textarea" 
        name="description" 
        value={form.description} 
        onChange={handleChange}
        />
      </Form.Group>
      
      <Button variant="success" type="submit">
        Enviar
      </Button>
    </Form>
    </Col>
  <Col sm={4}></Col>
 </Row>
    </Container> */}


{/* -------------------------------------------------------------------------------------------------------------------------------------- */}
    {/* El formulario de paquetes */}
    
    <Form onSubmit={handleSubmit}>


    <Container>
    <Row>
      <div align="center" style={{fontFamily:"sans-serif"}}>
      <h2>Trabajamos duro, para que tu envío llegue seguro.</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ciudad de origen:</Form.Label>
        <Form.Control 
        type="text" 
        name="cityR" 
        value={form.cityR} 
        onChange={handleChange}
        /> 
        </Form.Group>
        </Col>


        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección de recogida:</Form.Label>
        <Form.Control 
        type="text" 
        name="dirR" 
        value={form.dirR} 
        onChange={handleChange}
        /> 
        </Form.Group>
        </Col>


        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Remitente:</Form.Label>
        <Form.Control 
        type="text" 
        name="nameR" 
        value={form.nameR} 
        onChange={handleChange}
        /> 
        </Form.Group>
        </Col>


        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tipo paquete:</Form.Label>
        <Form.Control 
        type="text" 
        name="tipoP" 
        value={form.tipoP} 
        onChange={handleChange}
        /> 
        </Form.Group>
        </Col>
      </Row>



      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ciudad de destino:</Form.Label>
        <Form.Control 
        type="text" 
        name="cityD" 
        value={form.cityD} 
        onChange={handleChange}
        /> 
        </Form.Group>
        </Col>


        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección de destino:</Form.Label>
        <Form.Control 
        type="text" 
        name="dirD" 
        value={form.dirD} 
        onChange={handleChange}
        /> 
        </Form.Group>
        
        </Col>



        <Col>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destinatario:</Form.Label>
        <Form.Control 
        type="text" 
        name="nameD" 
        value={form.nameD} 
        onChange={handleChange}
        /> 
        </Form.Group>
        
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Celular Destinatario:</Form.Label>
        <Form.Control 
        type="text" 
        name="celD" 
        value={form.celD} 
        onChange={handleChange}
        /> 
        </Form.Group>
        </Col>
      </Row>
    </Container>





    <Container>
    <Row>

        <Container align="center">
      <Row>
        <Col xs></Col>

        <Col xs={{ order: 12 }}>
        <Button variant="success" type="submit">
        Enviar
      </Button>
        </Col>

        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>

    <Col sm={4}></Col>



        
      </Row>
    </Container>

    </Form>



    {/* -------------------------------------------------------------------------------------------------------------------------------------- */}




    <br></br>
    <br></br>
    <br></br>

    <Container align="center">
      
      <Row>
        <Col></Col>
        <Col>
        <div className='icon' style={{ paddingRight:"1em", fontSize:"1.8em", color:"#35A816"}}>
        <FontAwesomeIcon icon={faBoxesPacking}/>
        </div>
        <div align="center" style={{fontFamily:"sans-serif"}}>
        <h2>Tus paquetes actuales:</h2>
        </div>
        </Col>
        <Col></Col>
      </Row>

    </Container>
    <br></br>
    <br></br>


    <TablaInfo 
    data={db} 
    editarTarea={editarTarea} 
    obtenerTareas={obtenerTareas} 
    eliminarTarea={eliminarTarea}
    /> 
  </>
  )
}

export default Formulario