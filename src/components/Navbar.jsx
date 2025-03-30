import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Ecommerce</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Button variant="outline-light" as={Link} to="/login">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
