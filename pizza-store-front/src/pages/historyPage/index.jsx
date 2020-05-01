import React, { useState, useEffect } from "react";
import OrderCard from "../../components/orderCard/orderCard";
import CheckoutModal from "../../components/checkoutModal";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory } from "react-router-dom";
import API from "../../api/api";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
import "./style.scss";

const History = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [order, setorder] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let orderHistory = await API.get("/order/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("pizza-token")}`
        }
      });
      setorder([...order, ...orderHistory.data.orders]);
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }

    fetchData();
  }, []);
  const rednerLoader = loading => {
    if (loading)
      return (
        <div className="loading-container">
          <ClipLoader
            // css={override}
            size={80}
            color={"#f44336"}
            loading={true}
          />
        </div>
      );
  };
  return (
    <>
      {rednerLoader(loading)}
      <div className="container-history">
        {order.map((item, index) => {
          return <OrderCard order={item} index={index} key={index} />;
        })}
      </div>
      {order.length >= 1 ? (
        ""
      ) : (
        <div className="empty-message">
          Orders is empty please add item first
        </div>
      )}
    </>
  );
};

export default History;
