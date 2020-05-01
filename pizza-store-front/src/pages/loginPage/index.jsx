import React, { useState } from "react";
import AuthForm from "../../components/authForm/index";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../../api/api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [loginData, setloginData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const submit = async event => {
    event.preventDefault();
    console.log({ ...loginData });
    setloading(true);
    try {
      let loginResponse = await API.post("/user/login", { ...loginData });
      localStorage.setItem("pizza-token", loginResponse.data.token);
      dispatch({ type: "changeStatus", payload: true });
      let userResponse = await API.get("/user", {
        headers: { Authorization: `Bearer ${loginResponse.data.token}` }
      });
      dispatch({ type: "setUser", payload: userResponse["data"].user });
      toast.error(
        `Login success welcome ${userResponse["data"].user.firstName} `
      );
      setloading(false);

      history.push("/");
    } catch (err) {
      setloading(false);
      toast.warn(`Invalid credentials`);
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
  const rednerLoader = loading => {
    if (loading)
      return (
        <div className="loading-container">
          <ClipLoader
            // css={override}
            size={80}
            color={"#f44336"}
            loading={true}
          />
        </div>
      );
  };
  return (
    <div>
      {rednerLoader(loading)}
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
