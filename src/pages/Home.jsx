import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Home = ({ products }) => {
  return (
    <Container className="mt-4">
      <h2>Catálogo de Productos</h2>
      <Row>
        {products.length > 0 ? (
          products.map(product => (
            <Col key={product.id} md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text><strong>Precio: ${product.price}</strong></Card.Text>
                  <Card.Text><small>Stock: {product.stock}</small></Card.Text>
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
