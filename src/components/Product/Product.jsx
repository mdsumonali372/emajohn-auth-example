import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
   const {name, price, img, quantity, ratings, seller} = props.product
   const handleToCart = props.handleToCart;

     return (
        <div className='product'>
          <div className='product-img'>
            <img src={img} alt="" />
          </div>
          <div className="price-content">
            <h2>{name}</h2>
            <h4>Price: ${price} </h4>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} star</p>
          </div>
          <button onClick={() => handleToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;