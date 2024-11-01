import Carousel from 'react-bootstrap/Carousel';
import s from './catalogtovarov.module.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark"  >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.feednews.com/assets/v2/59b8aeda4d092799771e5e34461a7656?width%5Cu003d1280%5Cu0026height%5Cu003d720%5Cu0026quality%5Cu003dhq%5Cu0026category%5Cu003dus_Economy%5Cu0026Finance"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.tildacdn.com/tild3365-6161-4233-b864-333461393330/007_-_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/i6.photo.2gis.com/images/branch/1/140737497470525_9260.jpg?ssl=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;