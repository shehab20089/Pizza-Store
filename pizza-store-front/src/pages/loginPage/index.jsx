import React, { useState } from "react";
import AuthForm from "../../components/authForm/index";
import API from "../../api/api";

const LoginPage = () => {
  const [loginData, setloginData] = useState({ email: "", password: "" });
  const submit = async event => {
    event.preventDefault();
    console.log({ ...loginData });
    try {
      await API.post("/user/login", { ...loginData });
    } catch (err) {
      console.log(err.request.response);
    }
  };
  const changeEmailValue = event => {
    setloginData({ ...loginData, email: event.target.value });
    console.log(event.target.value);
  };
  const changePassValue = event => {
    setloginData({ ...loginData, password: event.target.value });
    console.log(event.target.value);
  };
  return (
    <div>
      {loginData.email}
      <AuthForm title="Login" submit={submit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <div className="frm-input">
            <input
              type="email"
              id="email"
              onChange={changeEmailValue}
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="pass">Password:</label>
          <div className="frm-input">
            <input
              type="password"
              onChange={changePassValue}
              id="pass"
              placeholder="Enter Your password"
              required
            />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default LoginPage;
