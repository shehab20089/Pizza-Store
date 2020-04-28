import React from "react";
import "./style.scss";

const authForm = props => {
  return (
    <form onSubmit={props.submit}>
      <div>
        <div className="auth-container">
          <div className="auth-title">
            <h2>{props.title}</h2>
          </div>
          <div className="auth-description">{props.children}</div>
          <div className=" auth-footer">
            <button type="submit">{props.title}</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default authForm;
