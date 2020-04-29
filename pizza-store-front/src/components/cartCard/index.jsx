import React, { useState } from "react";
import "./style.scss";
import { toast } from "react-toastify";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
const CartCard = props => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(props.pizza.quantity);
  const onQuantityChange = e => {
    if (e.target.value > 50) {
      setquantity(50);
      dispatch({ type: "edititem", payload: { ...props.pizza, quantity: 50 } });
      return;
    } else if (e.target.value < 1) {
      console.log(quantity);
      setquantity(1);
      dispatch({ type: "edititem", payload: { ...props.pizza, quantity: 50 } });

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
            <img src={props.pizza.image} alt="no pizza image" />
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
            <input
              type="number"
              onChange={onQuantityChange}
              value={quantity}
              max="50"
              min="1"
            />
          </div>
          <button onClick={removeFromCart}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
