import { Carousel } from 'react-bootstrap';
import img1 from './assets/comidita.jpg'
import img2 from './assets/comida.jpg'
import img3 from './assets/comida_carrusel.jpg'

export const Carrusel = () => {
  return (
    <section>
        <Carousel className="custom-carousel" fade interval={1500}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img1}
            alt="Primera imagen"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img2}
            alt="Segunda imagen"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img3}
            alt="Tercera imagen"
            />
        </Carousel.Item>
        </Carousel>
    </section>
  )
}
