import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = ({ products }) => {
  return (
    <Container className="mt-4">
      <h2>Catálogo de Productos</h2>
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                  <Card.Text>Categoría: {product.category}</Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="info">Ver Detalles</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </Row>
    </Container>
  );
};

export default Home;
