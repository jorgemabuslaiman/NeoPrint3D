
import React from 'react'
import { Col, Row } from "react-bootstrap";
import logoRolling from "../assets/logo2.png";
import jorgeImage from "../assets/george.jpg"
import EzequielImage from '../assets/ezequiel.jpg';
import EricImage from '../assets/eric.jpg';
import SergioImage from '../assets/sergio.jpg';
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <div>
      <section className="about-us-container">
        <div className="about-us-header">
          <h1>¿Quiénes Somos?</h1>
          <div className="header-line"></div>
        </div>

        <div className="about-us-logo">
          <img
            src={logoRolling}
            alt="Logo RollingCode School"
            className="logo-image"
          />
        </div>

        <p className="about-us-description">
          Somos un equipo de cuatro apasionados por la innovación y el diseño. En <strong>NeoPrint3D</strong>, nos dedicamos a crear macetas únicas impresas en 3D, combinando tecnología de vanguardia con un diseño sostenible y funcional. Nuestro objetivo es ofrecer productos que no solo embellezcan tus espacios, sino que también respeten el medio ambiente.
          <br /><br />
          En este proyecto, cada integrante aporta su experiencia y creatividad para hacer de <strong>NeoPrint3D</strong> una tienda en línea que inspire a los amantes de las plantas y la decoración. Diseñamos, imprimimos y personalizamos cada maceta con dedicación, asegurándonos de que cada pieza sea única y de alta calidad.
          <br /><br />
          ¡En <strong>NeoPrint3D</strong> creemos que una maceta puede ser mucho más que un simple recipiente: es una obra de arte que da vida a tus plantas y a tu hogar!
        </p>

        <Row className="team-members">
          <Col md={6} sm={12} lg={3} className="team-member">
            <div className="member-image border-primary">
            <img src={jorgeImage} alt="Jorge" />
            </div>
            <h5 className="text-primary">Jorge Moreno Abuslaiman</h5>
            <p className="member-role">
              Página de administracion, Login, Página Principal.
            </p>
          </Col>

          <Col md={6} sm={12} lg={3} className="team-member">
            <div className="member-image border-primary">
            <img src={EzequielImage} alt="Ezequiel" />
            </div>
            <h5 className="text-primary">Ezequiel Calvetti</h5>
            <p className="member-role">
              Página de Error 404.
            </p>
          </Col>

          <Col md={6} sm={12} lg={3} className="team-member">
            <div className="member-image border-primary">
            <img src={EricImage} alt="Eric" />
            </div>
            <h5 className="text-primary">Eric Ezequiel Mercado</h5>
            <p className="member-role">
              Página Acerca de Nosotros.
            </p>
          </Col>

          <Col md={6} sm={12} lg={3} className="team-member">
            <div className="member-image border-primary">
            <img src={SergioImage} alt="Sergio" />
            </div>
            <h5 className="text-primary">Sergio Joel Salazar</h5>
            <p className="member-role">
              Página de detalle, optativa de registro.
            </p>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default AboutPage;