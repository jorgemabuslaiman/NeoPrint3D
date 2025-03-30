import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar el producto según el ID de la URL
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container className="mt-4">
      <h2>Detalle del Producto</h2>
      <div>
        <strong>Código único:</strong> {product.id}
      </div>
      <div>
        <strong>Nombre:</strong> {product.name}
      </div>
      <div>
        <strong>Precio:</strong> ${product.price}
      </div>
      <div>
        <strong>Categoría:</strong> {product.category}
      </div>
      <div>
        <strong>Imagen:</strong>
        <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      </div>
      <div>
        <strong>Descripción:</strong> {product.description}
      </div>
      <div>
        <strong>Cantidad en stock:</strong> {product.stock}
      </div>
      <Button variant="secondary" onClick={() => navigate('/admin')}>Volver a la administración</Button>
    </Container>
  );
};

export default ProductDetail;
