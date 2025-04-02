import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductTable ({ products, setProducts, handleEditProduct }) {
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} width="50" />
              </Link>
            </td>
            <td>{product.description}</td>
            <td>{product.stock}</td>
            <td>
              <Button variant="primary" onClick={() => handleEditProduct(product)}>Editar</Button>
              <Button variant="danger" onClick={() => deleteProduct(product.id)} className="ml-2">Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
