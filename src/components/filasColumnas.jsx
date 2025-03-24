import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TarjetasMacetas from './cardsComponent'; // Importa las Cards
import React from 'react';

function FilasyColumnas() {
  // Array con la información de cada tarjeta
  const macetas = [
    { imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Roja", descripcion: "Ideal para interiores." },
    { imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Verde", descripcion: "Resistente a la intemperie." },
    { imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Azul", descripcion: "Perfecta para cactus." },
    { imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Amarilla", descripcion: "Dale vida a tu jardín." },
    { imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Rosa", descripcion: "Toque elegante y sutil." },
    { imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Celeste", descripcion: "Refrescante y relajante." }
  ];

  return (
    <Container className="mt-4">
      {/* Mapeamos las tarjetas en filas de 3 columnas */}
      <Row>
        {macetas.map((maceta, index) => (
          <Col key={index} md={4} className="mb-4">
            <TarjetasMacetas 
              imagen={maceta.imagen} 
              titulo={maceta.titulo} 
              descripcion={maceta.descripcion} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FilasyColumnas;

