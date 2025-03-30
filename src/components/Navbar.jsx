import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar () {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">
        <img src="https://i.pinimg.com/736x/c9/98/0b/c9980b7a33a4dc11a275ae12f6967957.jpg" alt="Logo de Mi Ecommerce" style={{width: "80px", height: "80px" }}
  />
</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Button variant="outline-light" as={Link} to="/login">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
