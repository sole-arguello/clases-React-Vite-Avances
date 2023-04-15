import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWiget from '../CartWiget/CartWiget'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="">
      <Container >
        <Navbar.Brand href="#home">
          Ala Cachufleta Ecomerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='px-5' id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='px-5' href="#features">Conjuntos</Nav.Link>
            <Nav.Link className='px-5' href="#pricing">Top</Nav.Link>
            <Nav.Link className='px-5' href="#pricing">Bombis</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <CartWiget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar