import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TablaFila from './TablaFila';

function TablaInfo({data, obtenerTareas, editarTarea, eliminarTarea}) {
  return (
    
    <>
    
    <Container fluid>
      
      <Row>
        <Col sm={1}>
        
        </Col>


        <Col sm={10}>


        <Table responsive="sm">

        <thead>

          <tr align="center">
            <th>Ciudad de recogida</th>
            <th>Nombre remitente</th> 
            <th>Dirección de recogida</th>
            <th>Tipo paquete</th>
            <th>Ciudad destino</th>
            <th>Dirección destino</th> 
            <th>Nombre del destinatario</th>
            <th>Celular destino</th>
            <th>Acciones</th>

          </tr>

        </thead>


        <tbody>
         
        {
          data.length === 0 ? (
            <tr>
            <td colSpan="9">
                  Sin datos
            </td>
            </tr>
            ): data.map(elem => (<TablaFila 
              obtenerTareas={obtenerTareas}
              editarTarea={editarTarea}  
              eliminarTarea={eliminarTarea} 
              key={elem._id} 
              elem={elem}/>))

}
          

        </tbody>

      </Table>




        </Col>


        <Col sm={1}></Col>
      </Row>
    </Container>

    </>

  )
}

export default TablaInfo