import React from "react";
import "./style.scss";
const PizzaCard = props => {
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img
            src={` ${process.env.REACT_APP_baseUrl}/${props.image}`}
            alt="no pizza image"
          />
        </div>
        <div className="card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
        <div className=" card-footer">
          <button>Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
