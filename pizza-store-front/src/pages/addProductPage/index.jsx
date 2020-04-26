import React, { useState } from "react";
import AuthForm from "../../components/authForm/index";

const AddProuctPage = () => {
  return (
    <div>
      <AuthForm title="Add Pizza">
        <div className="input-group">
          <label htmlFor="email">Pizza Name:</label>
          <div className="frm-input">
            <input type="email" id="email" placeholder="Enter Pizza Name" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="description">Pizza description:</label>
          <div className="frm-input">
            <input
              type="text"
              id="description"
              placeholder="Enter pizza  description"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="image">Upload image:</label>
          <div className="frm-input">
            <input
              type="file"
              id="image"
              accept="image/*"
              placeholder="upload pizza image"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <div className="frm-input">
            <input type="text" id="price" placeholder="Enter Pizza price" />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default AddProuctPage;
