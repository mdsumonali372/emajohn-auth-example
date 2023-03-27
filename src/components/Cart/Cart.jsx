import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props)
    const {cart}  = props;
    let price = 0;
    for(const cartPrice of cart){
        price = price + cartPrice.price;
    }
     return (
        <div className='cart'>
            <h3 style={{textAlign: 'center'}}>Order Summary</h3>
            <p>Select Items: {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h5>Grand Total: $1559</h5>
        </div>
    );
};

export default Cart;