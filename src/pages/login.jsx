import React, { useState, useContext } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "asd@asd.com" && password === "123") {
      login();
      navigate("/admin");
    } else {
      setError("Usuario y/o contraseña incorrectos");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Admin Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Ingresar</Button>
      </Form>
    </Container>
  );
}

export default Login;
