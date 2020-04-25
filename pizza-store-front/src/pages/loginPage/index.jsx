import React from "react";
import AuthForm from "../../components/authForm/index";

const loginPage = () => {
  return (
    <div>
      <AuthForm title="Login">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <div className="frm-input">
            <input type="email" id="email" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="pass">Password:</label>
          <div className="frm-input">
            <input
              type="password"
              id="pass"
              placeholder="Enter Your password"
            />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default loginPage;
