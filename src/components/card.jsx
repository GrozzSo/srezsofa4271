import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import s from './catalogtovarov.module.css'

export function OneCard({ title, price, image, id, quantity }) {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {price} ₽
        </Card.Text>
        <Card.Text>
        Количество в наличии: {quantity}
        </Card.Text>
        <Button variant="light"><Link to={`/tovar/${id}`} className={s.txt_b}>Открыть товар</Link></Button>
      </Card.Body>
    </Card>
  );
}