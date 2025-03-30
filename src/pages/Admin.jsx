import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import { Container, Button, Form } from 'react-bootstrap';

const Admin = ({ isLogged, products, setProducts }) => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: ""
  });

  // Redirigir si no está autenticado
  useEffect(() => {
    if (!isLogged) navigate('/login');
  }, [isLogged, navigate]);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    // Verificar que todos los campos estén completos
    if (!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.category || !newProduct.image || !newProduct.description || !newProduct.stock) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Verificar si el ID ya existe
    if (products.some(product => product.id === newProduct.id)) {
      alert("El ID del producto ya existe. Ingrese un ID único.");
      return;
    }

    // Agregar el producto a la lista
    setProducts([...products, newProduct]);

    // Resetear el formulario
    setNewProduct({ id: "", name: "", price: "", category: "", image: "", description: "", stock: "" });
  };

  const handleEditProduct = (product) => {
    // Cargar el producto seleccionado para edición en el formulario
    setNewProduct({ ...product });
  };

  return (
    <Container className="mt-4">
      <h2>Administración de Productos</h2>

      <Form>
        <Form.Group className="mb-2">
          <Form.Label>ID del Producto</Form.Label>
          <Form.Control type="text" name="id" value={newProduct.id} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" value={newProduct.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" name="price" value={newProduct.price} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Categoría</Form.Label>
          <Form.Control type="text" name="category" value={newProduct.category} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Imagen (URL)</Form.Label>
          <Form.Control type="text" name="image" value={newProduct.image} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" name="description" value={newProduct.description} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Cantidad en Stock</Form.Label>
          <Form.Control type="number" name="stock" value={newProduct.stock} onChange={handleChange} />
        </Form.Group>

        <Button variant="success" onClick={handleAddProduct}>Agregar Producto</Button>
      </Form>

      <ProductTable 
        products={products} 
        setProducts={setProducts} 
        handleEditProduct={handleEditProduct} // Pasar la función de edición
      />
    </Container>
  );
};

export default Admin;
