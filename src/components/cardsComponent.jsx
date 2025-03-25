import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TarjetasMacetas({ imagen, titulo, descripcion, onSelect }) {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={imagen} alt={titulo} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary" onClick={onSelect}>Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetasMacetas;
