import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const checkoutModal = props => {
  return (
    <form onSubmit={props.submit}>
      <div>
        <div onClick={props.onClick} className="checkout-container">
          <div className="close-icon" onClick={props.closeFunc}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="checkout-title">
            <h2>{props.title}</h2>
          </div>
          <div className="checkout-description">{props.children}</div>
          <div className=" checkout-footer">
            <button type="submit">{props.title}</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default checkoutModal;
