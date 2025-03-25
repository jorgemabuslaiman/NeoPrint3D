import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './context/authContext';
import NavBar from './components/navBar';  // Asegúrate de importar el Navbar
import LandingPage from './pages/landingPage';
import Login from './pages/login';
import AdminPage from './pages/adminPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar /> {/* El Navbar se muestra en todas las páginas */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
