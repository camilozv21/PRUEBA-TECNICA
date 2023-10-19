import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const Cards = () => {
    const products = [
        { id: 1, name: 'Hamburguesa', price: 19.99, description: 'Deliciosa Hamburguesa', image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg' },
        { id: 2, name: 'Pollito', price: 29.99, description: 'Delicioso pollito que rico', image: 'https://epicureandculture.com/wp-content/uploads/2016/10/Nice_food.jpg' },
        { id: 3, name: 'Carnita asada', price: 39.99, description: 'Que rico una carnita a esta hora', image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/671e271d-b43d-4924-8d43-fbf254c37f8f-bao-buns.jpg' },
      ];
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
                  <Button variant="warning">Comprar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
