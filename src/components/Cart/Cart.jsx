import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const cartItem of cart) {
    cartItem.quantity = cartItem.quantity || 1;
    totalPrice = totalPrice + cartItem.price * cartItem.quantity;
    totalShipping = totalShipping + cartItem.shipping;
    quantity = quantity + cartItem.quantity;
  }
  const tax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      <p>Select Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      <div>
        <button className="clear-btn">
          Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>{" "}
        </button>
        <button className="review-btn">
          Review Order <FontAwesomeIcon icon={faArrowRight} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
