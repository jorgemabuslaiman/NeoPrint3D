import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Container className="mt-4"><h2>Producto no encontrado</h2></Container>;
  }

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <Card.Img variant="top" src={product.image} alt={product.name} style={{ maxWidth: "300px", margin: "auto" }} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text><strong>Código:</strong> {product.id}</Card.Text>
          <Card.Text><strong>Precio:</strong> ${product.price}</Card.Text>
          <Card.Text><strong>Categoría:</strong> {product.category}</Card.Text>
          <Card.Text><strong>Descripción:</strong> {product.description}</Card.Text>
          <Card.Text><strong>Stock:</strong> {product.stock}</Card.Text>
          <Link to="/">
            <Button variant="secondary">Volver al Catálogo</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
