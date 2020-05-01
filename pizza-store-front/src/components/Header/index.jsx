import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const Header = props => {
  let histroy = useHistory();
  const [searchResult, setsearchResult] = useState("");
  const [menuClass, setmenuClass] = useState("");
  const handleSearchChange = event => {
    setsearchResult(event.target.value);
  };
  const navigateToSearch = () => {
    histroy.push(`/search/${searchResult || " "}`);
  };
  const showHideMenu = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    if (menuClass != "show-menu-animation") {
      setmenuClass("show-menu-animation");
      return;
    }
    setmenuClass("hide-menu-animation");
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setmenuClass("hide-menu-animation");
    });
    return () => {
      document.removeEventListener("click", () => {
        setmenuClass("hide-menu-animation");
      });
    };
  }, []);
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src="/pizzaLogo.png" alt="" />
      </Link>
      <form
        action="get"
        onSubmit={event => {
          event.preventDefault();
          navigateToSearch();
        }}
      >
        <input
          type="text"
          placeholder="Search for pizza"
          onChange={handleSearchChange}
        />
        <div onClick={navigateToSearch} className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </form>
      <div className={`nav-container ${menuClass}`}>{props.children}</div>

      <div onClick={showHideMenu} className="hambIcon">
        <FontAwesomeIcon className="icon" icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
