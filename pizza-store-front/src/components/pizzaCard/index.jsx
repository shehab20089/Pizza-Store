import React from "react";
import "./style.scss";
const PizzaCard = props => {
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img src="/pizza1.jpg" alt="" />
        </div>
        <div className="card-title">
          <h2>Pizza 1</h2>
        </div>
        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolor amet quae quibusdam
          </p>
        </div>
        <div className=" card-footer">
          <button>Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
