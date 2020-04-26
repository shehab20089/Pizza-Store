import React from "react";
import "./style.scss";
const cartCard = props => {
  return (
    <div>
      <div className="cart-item-container">
        <div className="image-container">
          <img src="/pizza1.jpg" alt="no pizza image" />
        </div>
        <div className="cart-item-title">
          <h2>{props.title}</h2>
        </div>
        <div className="cart-item-description">
          <p>{props.description}</p>
        </div>
        <div className=" cart-item-footer">
          <div className="quntity">
            <p>Qty:</p>
            <input type="number" />
          </div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default cartCard;
