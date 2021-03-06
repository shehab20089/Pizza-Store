import React, { useState } from "react";
import "./style.scss";
import ProgressiveImage from "react-progressive-image";
import { toast } from "react-toastify";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
const CartCard = props => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(props.pizza.quantity);
  const onQuantityChange = e => {
    console.log(e.target.value);
    if (e.target.value > 50) {
      setquantity(50);
      dispatch({ type: "edititem", payload: { ...props.pizza, quantity: 50 } });
      return;
    } else if (e.target.value < 1) {
      console.log(quantity);
      setquantity(1);
      dispatch({ type: "edititem", payload: { ...props.pizza, quantity: 1 } });

      return;
    }
    setquantity(e.target.value);
    dispatch({
      type: "edititem",
      payload: { ...props.pizza, quantity: e.target.value }
    });
  };
  const removeFromCart = () => {
    toast.error("Item removed successfully");
    dispatch({
      type: "removeItem",
      payload: props.index
    });
  };

  return (
    <div>
      <div className="cart-item-container">
        <div className="img-title">
          <div className="image-container">
            <ProgressiveImage
              src={props.pizza.image}
              placeholder="pizzajpg.jpg"
            >
              {src => <img src={src} alt="no pizza image" />}
            </ProgressiveImage>
          </div>
          <div className="cart-item-title">
            <h2>{props.pizza.name}</h2>
          </div>
        </div>
        <div className="cart-item-description">
          <p>{props.pizza.description}</p>
        </div>
        <div className=" cart-item-footer">
          <div className="quntity">
            <p>Qty:</p>
            <input type="number" onChange={onQuantityChange} value={quantity} />
          </div>
          <button onClick={removeFromCart}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
