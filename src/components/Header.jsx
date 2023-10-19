import logo from "./assets/logo.jpg"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
    <Navbar>
        <Container>
            <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Nav className="me-auto">
            <Link to="/" className="d-flex align-items-center justify-content-center link-nav">Home</Link>
            <Link to="/register" className="d-flex align-items-center justify-content-center link-nav">Registro</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}
