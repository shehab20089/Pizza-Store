import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/authForm/index";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import API from "../../api/api";
import { useSelector, useDispatch } from "react-redux";

const RegisterPage = () => {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [role, setrole] = useState("user");
  let changeActive = val => {
    setrole(val);
  };
  const dispatch = useDispatch();
  const [registerData, setregisterData] = useState({});
  const submit = async event => {
    event.preventDefault();
    setloading(true);
    let data = { ...registerData, IsAdmin: role == "admin" ? "admin" : false };
    console.log(data);
    if (data.confirmPass != data.password) {
      setloading(false);
      toast.warn(`password and confirm password don't match`);
      return;
    }
    try {
      let registerResponse = await API.post("/user/register", { ...data });
      localStorage.setItem("pizza-token", registerResponse.data.token);
      dispatch({ type: "changeStatus", payload: true });
      dispatch({ type: "setUser", payload: registerResponse.data.user });
      toast.error(`Register successfully`);
      setloading(false);
      history.push("/");
    } catch (err) {
      setloading(false);
      toast.warn(`${err.response.data.error}`);
      console.log("err.request.response");
      console.log(err.response.data.error);
    }
  };

  const handleOnChange = e => {
    const { value, name } = e.target;
    console.log(name);
    console.log(value);
    setregisterData({ ...registerData, [name]: value });
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
              required
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
              required
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
              required
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
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="Cpass">Confirm Password:</label>
          <div className="frm-input">
            <input
              type="password"
              id="Cpass"
              name="confirmPass"
              placeholder="please confirm your password"
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
