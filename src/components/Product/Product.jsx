import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
   const {name, price, img, quantity, ratings, seller} = props.product
     return (
        <div className='product'>
           <img src={img} alt="" />
          <div className="price-content">
          <h2>{name}</h2>
          <h4>Price: ${price} </h4>
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings} start</p>
          </div>
          <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;