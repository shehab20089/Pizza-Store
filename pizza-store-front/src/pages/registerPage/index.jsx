import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/authForm/index";
import API from "../../api/api";
import { useSelector, useDispatch } from "react-redux";

const RegisterPage = () => {
  const history = useHistory();
  const [role, setrole] = useState("user");
  let changeActive = val => {
    setrole(val);
  };
  const dispatch = useDispatch();
  const [registerData, setregisterData] = useState({});
  const submit = async event => {
    event.preventDefault();
    let data = { ...registerData, IsAdmin: role == "admin" ? "admin" : false };

    try {
      let registerResponse = await API.post("/user/register", { ...data });
      localStorage.setItem("pizza-token", registerResponse.data.token);
      dispatch({ type: "changeStatus", payload: true });
      dispatch({ type: "setUser", payload: registerResponse.data.user });
      history.push("/");
    } catch (err) {
      console.log(err.request.response);
    }
  };

  const handleOnChange = e => {
    const { value, name } = e.target;
    console.log(name);
    console.log(value);
    setregisterData({ ...registerData, [name]: value });
  };

  return (
    <div>
      <AuthForm title="Register" submit={submit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <div className="frm-input">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleOnChange}
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="FirstName">First Name:</label>
          <div className="frm-input">
            <input
              type="text"
              id="FirstName"
              name="fname"
              onChange={handleOnChange}
              placeholder="Enter Your first name"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <div className="frm-input">
            <input
              type="text"
              id="lastName"
              name="lname"
              onChange={handleOnChange}
              placeholder="Enter Your last Name"
            />
          </div>
        </div>
        <div className="input-group">
          <label>Role:</label>
          <div className="role">
            <div
              className={`role-btn ${role == "user" ? "active" : ""}`}
              onClick={() => changeActive("user")}
            >
              user
            </div>
            <div
              className={`role-btn ${role == "admin" ? "active" : ""}`}
              onClick={() => changeActive("admin")}
            >
              admin
            </div>
          </div>
          {/* {role == "admin" ? (
            <div className="frm-input">
              <input
                type="admin"
                placeholder="Enter Your admin code (admin code is 'admin')"
              />
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="input-group">
          <label htmlFor="pass">Password:</label>
          <div className="frm-input">
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Enter Your password"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="Cpass">Password:</label>
          <div className="frm-input">
            <input
              type="password"
              id="Cpass"
              name="confirmPass"
              placeholder="please confirm your password"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
