import React, { useState } from "react";
import AuthForm from "../../components/authForm/index";

const RegisterPage = () => {
  const [role, setrole] = useState("user");
  let changeActive = val => {
    setrole(val);
  };

  return (
    <div>
      <AuthForm title="Register">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <div className="frm-input">
            <input type="email" id="email" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="Name">Name:</label>
          <div className="frm-input">
            <input type="text" id="Name" placeholder="Enter Your Name" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="Address">Address:</label>
          <div className="frm-input">
            <input type="text" id="Address" placeholder="Enter Your Address" />
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
          {role == "admin" ? (
            <div className="frm-input">
              <input
                type="admin"
                placeholder="Enter Your admin code (admin code is 'admin')"
              />
            </div>
          ) : (
            ""
          )}
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

        <div className="input-group">
          <label htmlFor="Cpass">Password:</label>
          <div className="frm-input">
            <input
              type="password"
              id="Cpass"
              placeholder="please confirm your password"
            />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
