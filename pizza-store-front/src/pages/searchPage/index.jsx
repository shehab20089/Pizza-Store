import React, { useEffect } from "react";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PizzaCard from "../../components/pizzaCard";
import "./style.scss";
const SearchPage = () => {
  const products = useSelector(state => state.productReducer.products);
  const { searchResult } = useParams();
  let cards = products
    .filter(item => {
      return item.name.indexOf(searchResult) > -1;
    })
    .map((pizza, index) => {
      return <PizzaCard pizza={pizza} key={index} index={index} />;
    });
  return (
    <div>
      <div className="menu-container">{cards}</div>
    </div>
  );
};

export default SearchPage;