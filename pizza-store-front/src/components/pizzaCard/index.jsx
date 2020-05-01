import React, { useState } from "react";
import "./style.scss";
import { changeCurrency } from "../../util/reuseableMeathods";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressiveImage from "react-progressive-image";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PizzaCard = props => {
  const dispatch = useDispatch();
  const currency = useSelector(state => state.currencyReducer.currentCurrency);

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
    toast.error(` ${quantity} item added successfully to cart`);

    dispatch({
      type: "addTocart",
      payload: { ...props.pizza, quantity: quantity }
    });
  };
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <ProgressiveImage src={props.pizza.image} placeholder="pizzajpg.jpg">
            {src => <img src={src} alt="no pizza image" />}
          </ProgressiveImage>
        </div>
        <div className="card-title">
          <h2>{props.pizza.name}</h2>
        </div>
        <div className="card-description">
          <p>{props.pizza.description}</p>
        </div>
        <div className="card-data">
          <p>Price per unit:</p>
          <p>
            {changeCurrency(currency, props.pizza.price)} {currency}
          </p>
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
