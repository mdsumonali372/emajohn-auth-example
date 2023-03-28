import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect( () => {
        // console.log(products)
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step 1: get id
        for(const id in storedCart){
            // console.log(id)
            // step 2: get product using by id
           const addedProduct = products.find(product => product.id === id);
        //    console.log(addedProduct)
            // step 3: add quantity of the product
            if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: added the product save cart
            saveCart.push(addedProduct);
            }
            console.log('addedProduct', addedProduct)

        }
        setCart(saveCart);
    }, [products])

    const handleToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
       }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleToCart={handleToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;