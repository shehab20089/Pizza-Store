import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const PizzaCard = props => {
  const dispatch = useDispatch();

  const [quantity, setquantity] = useState(1);
  const onQuantityChange = e => {
    if (e.target.value > 50) {
      setquantity(50);
      return;
    } else if (e.target.value < 1) {
      console.log(quantity);
      setquantity(1);
      return;
    }
    setquantity(e.target.value);
  };
  const addToCart = () => {
    dispatch({
      type: "addTocart",
      payload: { ...props.pizza, quantity: quantity }
    });
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src={` ${process.env.REACT_APP_baseUrl}/${props.pizza.image}`}
            alt="no pizza image"
          />
        </div>
        <div className="card-title">
          <h2>{props.pizza.name}</h2>
        </div>
        <div className="card-description">
          <p>{props.pizza.description}</p>
        </div>
        <div className="card-data">
          <p>Price per unit:</p>
          <p>{props.pizza.price}$</p>
        </div>
        <div className="card-data">
          <p>Quantity:</p>
          <input
            type="number"
            onChange={onQuantityChange}
            value={quantity}
            max="50"
            min="1"
          />
        </div>
        <div className="card-footer">
          <button onClick={addToCart}>
            Add To cart &nbsp;
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
