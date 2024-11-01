import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import React, { useState } from 'react';
import { OrderFormModal } from './Modalka';


const products = [
    {
        id: 1,
        title: 'Товар 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 999,
        image: 'https://avatars.mds.yandex.net/i?id=01f97500e33afde0414857db14012d75_sr-5235524-images-thumbs&n=13',
        quantity: 0,
    },

    {
        id: 2,
        title: 'Товар 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 888,
        image: 'https://avatars.mds.yandex.net/i?id=c9b346e223c72c888621f2440c40492754918f02-7543946-images-thumbs&n=13',
        quantity: 5,

      
        
    },
    {
        id: 3,
        title: 'Товар 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 666,
        image: 'https://www.bigtv.ru/storage/goodsImages/155/155852/clear_155852_1.jpg',
        quantity: 4,

    },
    {
        id: 4,
        title: 'Товар 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 111,
        image: 'https://avatars.mds.yandex.net/i?id=050bb8e2c69287fcb26427caed5cf086_sr-8254804-images-thumbs&n=13',
        quantity: 0,

        
    },

    {
        id: 5,
        title: 'Товар 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1010,
        image: 'https://avatars.mds.yandex.net/i?id=8bcc563ffa85eeab8b74e55767711cf1_sr-10490937-images-thumbs&n=13',
        quantity: 5,
    },
    {
        id: 6,
        title: 'Товар 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 222,
        image: 'https://avatars.mds.yandex.net/i?id=06ae693b2da8b430b89bcfc103531c65_sr-9705291-images-thumbs&n=13',
        quantity: 5,
    }
  
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}