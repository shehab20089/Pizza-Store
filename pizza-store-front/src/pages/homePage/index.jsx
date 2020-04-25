import React from "react";
import PizzaCard from "../../components/pizzaCard";
import "./style.scss";
const HomePage = () => {
  let arr = [0, 1, 1, 5, 5, 5, 5, 5];
  let cards = arr.map((val, index) => {
    return <PizzaCard title={`Pizza${index + 1}`} key={index} />;
  });
  return (
    <div>
      <div className="menu-container">{cards}</div>
    </div>
  );
};

export default HomePage;
