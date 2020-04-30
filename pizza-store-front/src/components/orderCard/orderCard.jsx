import React, { useState } from "react";
import "./style.scss";
import { changeCurrency } from "../../util/reuseableMeathods";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
const OrderCard = props => {
  const currency = useSelector(state => state.currencyReducer.currentCurrency);
  return (
    <div className="order-container">
      <div className="order-title">
        <p>order Id:</p>
        <p>{props.order._id}</p>
      </div>
      <div className="divider"></div>
      <div className="order-title">
        <p>products :</p>
      </div>

      {props.order.Products.map((i, index) => {
        return (
          <div className="order-products" key={index}>
            <p>name: {i.name}</p>
            <p>quantity: {i.quantity}</p>
          </div>
        );
      })}
      <div className="divider"></div>
      <div className="order-title">
        <p>Total Price:</p>
        <p>
          {" "}
          {changeCurrency(
            currency,
            props.order.Products.map(item => {
              return item.price * item.quantity;
            }).reduce((a, b) => {
              return a + b;
            }, 0)
          )}{" "}
          {currency}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
