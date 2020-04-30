import React, { useState, useEffect } from "react";
import CartCard from "../../components/cartCard";
import CheckoutModal from "../../components/checkoutModal";
import { changeCurrency } from "../../util/reuseableMeathods";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../api/api";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
import "./style.scss";

const Cart = () => {
  const cartItems = useSelector(state => state.cartReducer.cart);
  const currency = useSelector(state => state.currencyReducer.currentCurrency);
  const history = useHistory();
  const dispatch = useDispatch();
  const [order, setorder] = useState({});
  const submit = async event => {
    event.preventDefault();
    let data = { ...order, Products: [] };
    for (let i = 0; i < cartItems.length; i++) {
      const element = cartItems[i];
      data.Products.push({
        id: element._id,
        name: element.name,
        quantity: element.quantity,
        price: element.price
      });
    }
    try {
      let token = localStorage.getItem("pizza-token");
      let options = token
        ? {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("pizza-token")}`
            }
          }
        : {};
      console.log(options);
      let orderResponse = await API.post("/order/", { ...data }, options);
      dispatch({ type: "restCart" });
      toast.error("order successfully submitted");

      history.push("/");
    } catch (err) {
      toast.warn("an unexcepected error occured");

      console.log(err.request.response);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeFunc);
    return () => {
      document.removeEventListener("click", closeFunc);
    };
  }, []);
  const handleOnChange = e => {
    const { value, name } = e.target;
    console.log(name);
    console.log(value);
    setorder({ ...order, [name]: value });
  };
  const closeFunc = event => {
    // event.stopPropagation();
    let modalElement = document.getElementById("modal");
    if (modalElement) {
      modalElement.classList.remove("show-modal");
    }
  };
  const showModal = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    console.log(document.getElementById("modal"));
    let modalElement = document.getElementById("modal");
    if (modalElement) {
      document.getElementById("modal").classList.add("show-modal");
    }
    console.log(modalElement.classList);
  };
  return (
    <>
      <div id="modal" className={`modal-container`}>
        <CheckoutModal
          onClick={event => {
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
          }}
          submit={submit}
          closeFunc={closeFunc}
          title="Checkout"
        >
          <div className="input-group">
            <label htmlFor="nameemail">Name:</label>
            <div className="frm-input">
              <input
                type="name"
                onChange={handleOnChange}
                name="name"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="Address">Address:</label>
            <div className="frm-input">
              <input
                type="text"
                onChange={handleOnChange}
                name="Address"
                id="Address"
                placeholder="Enter Shopping Address"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="Phone">Phone:</label>
            <div className="frm-input">
              <input
                type="text"
                onChange={handleOnChange}
                name="phone"
                id="Phone"
                placeholder="Enter Your Phone"
                required
              />
            </div>
          </div>
          <div className="price-text">
            {" "}
            Delivery price: {changeCurrency(currency, 18)} {currency}
          </div>
          <div className="price-text">
            {" "}
            Order price:{" "}
            {changeCurrency(
              currency,
              cartItems
                .map(item => {
                  return item.price * item.quantity;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0)
            )}{" "}
            {currency}
          </div>
          <div className="price-text">
            Total price:{" "}
            {changeCurrency(
              currency,
              cartItems
                .map(item => {
                  return item.price * item.quantity;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0 + 18)
            )}{" "}
            {currency}
          </div>
        </CheckoutModal>
      </div>
      <div className="cart-contaier">
        <div className="price-container">
          {" "}
          <div className="cart-price">
            {" "}
            <p> Delivery price:</p>{" "}
            <p>
              {changeCurrency(currency, 18)} {currency}
            </p>
          </div>
          <div className="cart-price">
            <p> Order price: </p>
            <p>
              {" "}
              {changeCurrency(
                currency,
                cartItems
                  .map(item => {
                    return item.price * item.quantity;
                  })
                  .reduce((a, b) => {
                    return a + b;
                  }, 0)
              )}{" "}
              {currency}{" "}
            </p>
          </div>
          <div className="divider"></div>
          <div className="cart-price">
            <p> Total price: </p>
            <p>
              {" "}
              {changeCurrency(
                currency,
                cartItems
                  .map(item => {
                    return item.price * item.quantity;
                  })
                  .reduce((a, b) => {
                    return a + b;
                  }, 0 + 18)
              )}{" "}
              {currency}
            </p>
          </div>
        </div>
        <div className="container">
          {cartItems.map((item, index) => {
            return <CartCard pizza={item} index={index} key={index}></CartCard>;
          })}
        </div>
      </div>
      {cartItems.length >= 1 ? (
        <div className="checkout-btn" onClick={showModal}>
          Porceed to Checkout
        </div>
      ) : (
        <div className="empty-message">Cart is empty please add item first</div>
      )}
    </>
  );
};

export default Cart;
