import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
function PaginaDetalleProducto({ producto, goBack})  {
    if (!producto) return null;
    return (
        <Container className="mt-4 d-flex justify-content-center">
        <Card style={{ width: "30rem" }} className="text-center">
          <Card.Img variant="top" src={producto.imagen} alt={producto.titulo} />
          <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            <Card.Text><strong>Descripción:</strong> {producto.descripcion}</Card.Text>
            <Card.Text><strong>Categoría:</strong> {producto.categoria || "Sin categoría"}</Card.Text>
            <Card.Text><strong>Cantidad en stock:</strong> {producto.stock || "No disponible"}</Card.Text>
            <Button variant="secondary" onClick={goBack}>Volver</Button>
          </Card.Body>
        </Card>
      </Container>
    )
}

export default PaginaDetalleProducto
