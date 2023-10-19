import { Cards } from "../components/Cards"
import { Carrusel } from "../components/Carrusel"
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
        <article className="container mb-5">
            <Link to="/register" className="btn btn-warning fixed-button">Registrarse</Link>
            <h2 className='container mt-3 mb-3'>Nuestros servicios</h2>
            <Carrusel />
            <h2  className='container mt-3 mb-3'>Productos</h2>
            <Cards />
        </article>
    </>
  )
}
