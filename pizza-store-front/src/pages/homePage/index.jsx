import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { connect, Provider, useSelector, useDispatch } from "react-redux";

import PizzaCard from "../../components/pizzaCard";
import "./style.scss";
const HomePage = () => {
  const products = useSelector(state => state.productReducer.products);

  let cards = products.map((pizza, index) => {
    return <PizzaCard pizza={pizza} key={index} index={index} />;
  });

  return (
    <div>
      {cards.length > 0 ? (
        <div className="menu-container">{cards}</div>
      ) : (
        <div className="loading-container">
          <ClipLoader
            // css={override}
            size={80}
            color={"#f44336"}
            loading={true}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
