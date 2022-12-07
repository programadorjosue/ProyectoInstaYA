import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruckFast} from "@fortawesome/free-solid-svg-icons";


function Barranav() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
        <div className='icon' style={{paddingRight:"1em", fontSize:"1.8em", color:"white"}}>
        <FontAwesomeIcon icon={faTruckFast}/>
        </div>
          <div>
          <Navbar.Brand href="" style={{fontSize:"2em"}}> InstaYA</Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <Nav.Link href=""></Nav.Link>
            <Nav.Link href=""></Nav.Link>
            <Nav.Link href="">La manera más segura de realizar tus envíos.</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Barranav