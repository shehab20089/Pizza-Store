import React from "react";
import CartCard from "../../components/cartCard";
import "./style.scss";

const cart = () => {
  return (
    <div className="container">
      <CartCard
        title="Pizza1"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dolore sint rem, odio modi quae accusamus mollitia "
      ></CartCard>
    </div>
  );
};

export default cart;
