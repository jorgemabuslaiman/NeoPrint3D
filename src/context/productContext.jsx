import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]);

  // Cargar productos guardados en LocalStorage al inicio
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(storedProducts);
  }, []);

  // Guardar productos en LocalStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  return (
    <ProductContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductContext.Provider>
  );
}
