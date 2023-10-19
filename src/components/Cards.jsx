import { Container, Row, Col, Card, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';

export const Cards = () => {
    const products = [
        { id: 1, name: 'Hamburguesa', price: 19.99, description: 'Deliciosa Hamburguesa', image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg' },
        { id: 2, name: 'Pollito', price: 29.99, description: 'Delicioso pollito que rico', image: 'https://epicureandculture.com/wp-content/uploads/2016/10/Nice_food.jpg' },
        { id: 3, name: 'Taquitos mexicanos', price: 39.99, description: 'Que rico un taquito a esta hora, no he almorzado', image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/671e271d-b43d-4924-8d43-fbf254c37f8f-bao-buns.jpg' },
      ];

      const [show, setShow] = useState(false)

  return (
    <>
    <Container>
        <h2>Productos</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <Card className="mb-3 custom-card">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                  <Button variant="warning" onClick={() => setShow(true)}>Comprar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer position='top-end' className='mt-3' style={{position: 'fixed', right: '20px', top: '20px', marginRight: '20px'}}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg='success'>
            <Toast.Header>
              <strong className="me-auto">TSgroup</strong>
              <small>Hace 1 segundo</small>
            </Toast.Header>
            <Toast.Body className='text-white'>Woohoo, acabas de comprar algo delicioso!</Toast.Body>
          </Toast>
      </ToastContainer>
    </>
  )
}
