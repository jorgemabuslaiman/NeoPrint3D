import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

function App () {
  const [isLogged, setIsLogged] = useState(false);
  const [products, setProducts] = useState([
      {
        id: 0,
        name: "Producto A",
        price: 1000,
        category: "Categoría 1",
        image: "https://img.freepik.com/psd-gratis/renderizacion-3d-icono-planta_23-2151371070.jpg",
        description: "Descripción del Producto A",
        stock: 5
      }
    ]);
    

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/admin" element={<Admin isLogged={isLogged} products={products} setProducts={setProducts} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
