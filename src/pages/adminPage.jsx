import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import ProductosTable from "../components/tablaProductos";
import { Button, Container } from "react-bootstrap";

function AdminPage() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <h1 className="text-center mt-4">Panel de Administración</h1>
      <Button variant="danger" className="mb-3" onClick={logout}>Cerrar Sesión</Button>
      <ProductosTable />
    </Container>
  );
}

export default AdminPage;
