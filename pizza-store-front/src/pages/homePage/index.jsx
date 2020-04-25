import React from "react";
import PizzaCard from "../../components/pizzaCard";
import "./style.scss";
const HomePage = () => {
  let arr = Array.from(Array(10).keys());
  let cards = arr.map((val, index) => {
    return (
      <PizzaCard
        title={`Pizza${index + 1}`}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inciduntdolor amet quae quibusdam"
        }
        key={index}
      />
    );
  });
  return (
    <div>
      <div className="menu-container">
        <PizzaCard
          title={`Pizza${16 + 1}`}
          description={"Lorem  amet quae quibusdam"}
          key={16}
        />
        {cards}
      </div>
    </div>
  );
};

export default HomePage;
