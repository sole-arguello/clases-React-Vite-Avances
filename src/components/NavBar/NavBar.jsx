import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
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
            <Link className='' to='/' >Inicio</Link>
            <NavLink className='px-5' to='/categoria/Conjunto'>Conjuntos</NavLink>
            <NavLink className='px-5' to='/categoria/Top'>Top</NavLink>
            <NavLink className='px-5' to='/categoria/Bombis'>Bombis</NavLink>
          </Nav>
          <Nav>
            {/* <Nav.Link eventKey={2} href="#memes">
              <CartWiget />
            </Nav.Link> */}
            <Link className='' to='/cartEjemplo'>
              <CartWiget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar