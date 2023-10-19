import { Cards } from "../components/Cards"
import { Carrusel } from "../components/Carrusel"
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
        <article className="container mb-5">
            <div className="fixed-button">
                <Link to="/register" className="btn btn-warning">Registrarse</Link>
            </div>
            <Carrusel />
            <Cards />
        </article>
    </>
  )
}
