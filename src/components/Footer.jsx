import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-4">
      <Container>
        <span>Mi Ecommerce</span>
        <div className="mt-2">
          <FaFacebook size={24} className="mx-2" />
          <FaInstagram size={24} className="mx-2" />
          <FaYoutube size={24} className="mx-2" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
