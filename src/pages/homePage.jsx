import React from "react";
import ProductList from "../components/listaProductos";

function HomePage() {
  return (
    <div>
      <h1 className="text-center mt-4">Tienda Online</h1>
      <ProductList />
    </div>
  );
}

export default HomePage;
