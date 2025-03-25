import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Bienvenido a la Tienda</h1>
      <Button variant="success" className="m-2" onClick={() => navigate("/home")}>
        🏪 Ir a la Tienda
      </Button>
      <Button variant="primary" className="m-2" onClick={() => navigate("/login")}>
        🔧 Admin
      </Button>
    </Container>
  );
}

export default LandingPage;
