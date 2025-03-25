import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import FilasyColumnas from "./components/filasColumnas";
import PaginaDetalleProducto from "./pages/PaginaDetalleProducto";

function App() {
  
  const [productoElegido, setProductoElegido] = useState(null);

  return (
    <>
      <NavBar />
      {productoElegido ? (
        <PaginaDetalleProducto producto={productoElegido} goBack={() => setProductoElegido(null)} />
      ) : (
        <FilasyColumnas onSelect={setProductoElegido} />
      )}
    </>
  );
}

export default App;
