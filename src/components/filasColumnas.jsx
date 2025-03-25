import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TarjetasMacetas from './cardsComponent'; // Importa las Cards
import React from 'react';

function FilasyColumnas({ onSelect }) {
  // Array con la información de cada tarjeta
  const macetas = [
    { id: 1, imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Roja", descripcion: "Ideal para interiores." },
    { id:  2, imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Verde", descripcion: "Resistente a la intemperie." },
    { id: 3, imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Azul", descripcion: "Perfecta para cactus." },
    { id: 4, imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Amarilla", descripcion: "Dale vida a tu jardín." },
    { id: 5, imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Rosa", descripcion: "Toque elegante y sutil." },
    { id: 6, imagen: "https://www.achaheart.org/media/1836/asd-illustration.jpg", titulo: "Maceta Celeste", descripcion: "Refrescante y relajante." }
  ];

  return (
    <Container className="mt-4">
      {/* Mapeamos las tarjetas en filas de 3 columnas */}
      <Row>
        {macetas.map((maceta) => (
          <Col key={maceta.id} md={4} className="mb-4">
            <TarjetasMacetas 
              imagen={maceta.imagen} 
              titulo={maceta.titulo} 
              descripcion={maceta.descripcion}
              onSelect={ () => onSelect(maceta)} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FilasyColumnas;

