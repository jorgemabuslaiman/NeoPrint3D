import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Maceta 3D",
      price: 500,
      category: "Decoración",
      image: "https://img.freepik.com/psd-gratis/renderizacion-3d-icono-planta_23-2151371070.jpg",
      description: "Maceta impresa en 3D para interiores.",
      stock: 10,
    }
  ]);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
