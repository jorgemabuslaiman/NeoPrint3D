import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function ProductosTable() {
  // Estado inicial con productos de ejemplo
  const [productos, setProductos] = useState([
    {
      id: 1,
      codigo: "MAC-001",
      nombre: "Maceta Roja",
      precio: 1200,
      categoria: "Decoración",
      imagen: "https://via.placeholder.com/100", // Imagen de prueba
      descripcion: "Maceta de color rojo vibrante.",
      stock: 10
    },
    {
      id: 2,
      codigo: "MAC-002",
      nombre: "Maceta Azul",
      precio: 1500,
      categoria: "Jardinería",
      imagen: "https://via.placeholder.com/100",
      descripcion: "Maceta de color azul ideal para interiores.",
      stock: 5
    }
  ]);

  // Estado para el modal de edición
  const [showModal, setShowModal] = useState(false);
  const [productoActual, setProductoActual] = useState(null);

  // Función para agregar producto usando prompt
  const agregarProducto = () => {
    const codigo = prompt("Ingrese el código único del producto:");
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = prompt("Ingrese el precio del producto:");
    const categoria = prompt("Ingrese la categoría del producto:");
    const imagen = prompt("Ingrese la URL de la imagen del producto:");
    const descripcion = prompt("Ingrese una breve descripción del producto:");
    const stock = prompt("Ingrese la cantidad en stock:");

    if (codigo && nombre && precio && categoria && imagen && descripcion && stock) {
      const nuevoProducto = {
        id: productos.length + 1,
        codigo,
        nombre,
        precio: parseFloat(precio),
        categoria,
        imagen,
        descripcion,
        stock: parseInt(stock)
      };
      setProductos([...productos, nuevoProducto]);
    } else {
      alert("Todos los campos son obligatorios.");
    }
  };

  // Función para eliminar un producto
  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  // Función para abrir modal y editar producto
  const abrirModal = (producto) => {
    setProductoActual(producto);
    setShowModal(true);
  };

  // Función para manejar cambios en la edición
  const handleEditarChange = (e) => {
    setProductoActual({ ...productoActual, [e.target.name]: e.target.value });
  };

  // Función para guardar cambios en la edición
  const guardarEdicion = () => {
    setProductos(
      productos.map((producto) =>
        producto.id === productoActual.id ? productoActual : producto
      )
    );
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Productos</h2>

      {/* Tabla de productos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio ($)</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.codigo}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.categoria}</td>
              <td>
                <img src={producto.imagen} alt={producto.nombre} width="50" />
              </td>
              <td>{producto.descripcion}</td>
              <td>{producto.stock}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => abrirModal(producto)}>
                  ✏️ Editar
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => eliminarProducto(producto.id)}>
                  🗑️ Borrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Botón para agregar producto */}
      <Button variant="success" onClick={agregarProducto}>➕ Agregar Producto</Button>

      {/* Modal para edición */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                name="codigo"
                value={productoActual?.codigo || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={productoActual?.nombre || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={productoActual?.precio || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                value={productoActual?.categoria || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                name="imagen"
                value={productoActual?.imagen || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={productoActual?.descripcion || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={productoActual?.stock || ""}
                onChange={handleEditarChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={guardarEdicion}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductosTable;
