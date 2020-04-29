import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const Header = props => {
  let histroy = useHistory();
  const [searchResult, setsearchResult] = useState("");
  const handleSearchChange = event => {
    setsearchResult(event.target.value);
  };
  const navigateToSearch = () => {
    histroy.push(`/search/${searchResult}`);
  };
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src="/pizzaLogo.png" alt="" />
      </Link>
      <form action="get">
        <input
          type="text"
          placeholder="Search for pizza"
          onChange={handleSearchChange}
        />
        <div onClick={navigateToSearch} className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </form>
      {props.children}
    </div>
  );
};

export default Header;
