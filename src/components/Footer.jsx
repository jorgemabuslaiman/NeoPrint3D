import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer () {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-4">
      <Container>
        <span>Mi Ecommerce</span>
        <div className="mt-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebook size={24} color="#1877F2" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaInstagram size={24} color="#E4405F" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaYoutube size={24} color="#FF0000" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

