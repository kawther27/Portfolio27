import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../styles/Header.css'
function Header() {
  return (
    <header>
    <Navbar className="custom-header"  expand="lg" fixed="top">
      <Container 
       style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0 , margin: 0 }}>
        <Navbar.Brand href="#home" className='mx-5'>Portfolio</Navbar.Brand>
        
          <Nav className="ml-auto" 
                style={{
                display: 'flex',
                flexDirection: 'row'
                   }}>
            <Nav.Link href="#home" className=" text-white nav-link-custom mx-3" >Home</Nav.Link>
            <Nav.Link href="#projects" className="  text-white nav-link-custom  mx-3">Projects</Nav.Link>
            <Nav.Link href="#contact" className=" text-white nav-link-custom  mx-3">Contact</Nav.Link>
            <Nav.Link href="#testimonials" className=" text-white nav-link-custom  mx-3">Testimonials</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  </header>
  )
}

export default Header