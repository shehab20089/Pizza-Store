import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const Header = props => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src="/pizzaLogo.png" alt="" />
      </Link>
      <form action="get">
        <input type="text" placeholder="Search.." />
        <div className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </form>
      {props.children}
    </div>
  );
};

export default Header;