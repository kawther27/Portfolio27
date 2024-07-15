import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../styles/Header.css'
function Header() {
  return (
    <header>
    <Navbar className="custom-header"  expand="lg" fixed="top">
      <Container >
        <Navbar.Brand href="#home" style={{ color: '#d6bd97' }} className=' mx-4'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="sm-basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto flex-sm-row align-items-start  ">
              <Nav.Link href="#home" className="text-white nav-link-custom mx-4">Home</Nav.Link>
              <Nav.Link href="#projects" className="text-white nav-link-custom mx-4">Projects</Nav.Link>
              <Nav.Link href="#contact" className="text-white nav-link-custom mx-4">Contact</Nav.Link>
              <Nav.Link href="#testimonials" className="text-white nav-link-custom mx-4">Testimonials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header