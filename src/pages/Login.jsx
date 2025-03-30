import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const Login = ({ setIsLogged }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "asd@asd.com" && password === "1234") {
      setIsLogged(true);
      navigate('/admin'); // Redirige a la página de administración
    } else {
      alert("Usuario y/o contraseña incorrectos");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Iniciar Sesión</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>Ingresar</Button>
      </Form>
    </Container>
  );
};

export default Login;
