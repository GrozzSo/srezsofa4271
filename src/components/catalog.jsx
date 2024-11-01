import React, { useState } from 'react';
import { OneCard } from './card';
import s from './catalogtovarov.module.css'

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 999,
        image: 'https://avatars.mds.yandex.net/i?id=01f97500e33afde0414857db14012d75_sr-5235524-images-thumbs&n=13',
        quantity: 0,
        category: 'Струнные инстурменты'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 888,
        image: 'https://avatars.mds.yandex.net/i?id=c9b346e223c72c888621f2440c40492754918f02-7543946-images-thumbs&n=13',
        quantity: 5,
        category: 'Струнные инстурменты'
      
        
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 666,
        image: 'https://www.bigtv.ru/storage/goodsImages/155/155852/clear_155852_1.jpg',
        quantity: 4,
        category: 'Клавишные'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 111,
        image: 'https://avatars.mds.yandex.net/i?id=050bb8e2c69287fcb26427caed5cf086_sr-8254804-images-thumbs&n=13',
        quantity: 0,
        category: 'Клавишные'
        
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 1010,
        image: 'https://avatars.mds.yandex.net/i?id=8bcc563ffa85eeab8b74e55767711cf1_sr-10490937-images-thumbs&n=13',
        quantity: 2,
        category: 'Духовые'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 222,
        image: 'https://avatars.mds.yandex.net/i?id=06ae693b2da8b430b89bcfc103531c65_sr-9705291-images-thumbs&n=13',
        quantity: 7,
        category: 'Духовые',
    }
    
];

export function Catalogg(){
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return(
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск "
            />
            <select value={selectedCategory} onChange={handleCategoryChange} className={s.category}>
                <option value="" >Все категории</option>
                <option value="Духовые" >Духовые</option>
                <option value="Клавишные" >Клавишные</option>
                <option value="Струнные инстурменты" >Струнные инстурменты</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)} className={s.category} >
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
    
    
    <div className={s.da}>
        {sortedProducts.map((product) => (
                <OneCard 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                    quantity={product.quantity} 
                    category={product.category}
                />
        ))}
    </div>
    </div>
    );
}