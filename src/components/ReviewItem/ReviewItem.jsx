import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <div className="review-product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <div className="product-info">
          <div>
            <h3>{name}</h3>
            <p>
              Price:<span className="orange-text">${price}</span>
            </p>
            <p>
              Quantity:
              <span className="orange-text">{quantity}</span>
            </p>
          </div>
          <button
            onClick={() => handleRemoveFromCart(id)}
            className="delete-product"
          >
            <TrashIcon className="trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
