import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">NeoPrint3D</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Ir a la tienda</Nav.Link>
          <Nav.Link as={Link} to="/login">Admin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
