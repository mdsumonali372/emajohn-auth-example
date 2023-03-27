import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]  = useState([]);
    // console.log(cart.length)

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
       }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleToCart={handleToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3 style={{textAlign: 'center'}}>Order Summary</h3>
                <p>Select Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;