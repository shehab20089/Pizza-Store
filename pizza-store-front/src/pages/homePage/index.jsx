import React, { useEffect } from "react";
import { connect, Provider, useSelector, useDispatch } from "react-redux";

import PizzaCard from "../../components/pizzaCard";
import "./style.scss";
const HomePage = () => {
  const products = useSelector(state => state.productReducer.products);

  let cards = products.map((pizza, index) => {
    return (
      <PizzaCard
        title={pizza.name}
        description={pizza.description}
        key={index}
      />
    );
  });
  return (
    <div>
      <div className="menu-container">{cards}</div>
    </div>
  );
};

export default HomePage;
