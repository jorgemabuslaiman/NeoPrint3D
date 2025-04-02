import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Login({ setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "asd@asd.com" && password === "123") {
      setIsLogged(true);
      navigate("/admin"); // Redirige a Admin.jsx
    } else {
      alert("Usuario y/o contraseña incorrectos");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-start"> {/* Alinea a la izquierda */}
        <Col md={4}> {/* Controla el ancho del formulario */}
          <Card className="shadow p-4 border-0"> {/* Borde sombreado */}
            <Card.Body>
              <h2 className="mb-4">Iniciar Sesión</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin} className="w-100">
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
