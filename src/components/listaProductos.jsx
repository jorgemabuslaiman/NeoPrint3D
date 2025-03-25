import React, { useContext } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { ProductContext } from "../context/productContext";

function ProductList() {
  const { productos } = useContext(ProductContext);

  return (
    <Container className="mt-4">
      <h2 className="text-center">Productos Disponibles</h2>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Card.Text><strong>Precio:</strong> ${producto.precio}</Card.Text>
                <Card.Text><strong>Stock:</strong> {producto.stock}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
