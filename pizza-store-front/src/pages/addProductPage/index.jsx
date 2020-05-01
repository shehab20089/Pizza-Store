import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/authForm/index";
import API from "../../api/api";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";

const AddProuctPage = () => {
  const history = useHistory();
  const [productData, setproductData] = useState({});
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const submit = async event => {
    event.preventDefault();
    setloading(true);
    console.log(productData);
    let frmd = new FormData();

    for (var key in productData) {
      frmd.append(key, productData[key]);
    }

    try {
      let productResponse = await API.post(
        "/product/add",

        frmd,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pizza-token")}`
          }
        }
      );

      dispatch({
        type: "setProduct",
        payload: productResponse.data.Product
      });
      setloading(false);
      toast.error("Pizza added successfully");

      history.push("/");
    } catch (err) {
      setloading(false);
      toast.warn("an unexcepected error occured");

      console.log(err);
    }
  };

  const handleOnChange = e => {
    const { value, name } = e.target;
    setproductData({ ...productData, [name]: value });
  };
  const handleImageUpload = e => {
    let imgFormData = e.target.files[0];
    setproductData({ ...productData, image: imgFormData });
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
      <AuthForm submit={submit} title="Add Pizza">
        <div className="input-group">
          <label htmlFor="name">Pizza Name:</label>
          <div className="frm-input">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleOnChange}
              placeholder="Enter Pizza Name"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="description">Pizza description:</label>
          <div className="frm-input">
            <input
              type="text"
              name="description"
              onChange={handleOnChange}
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
              name="image"
              onChange={handleImageUpload}
              id="image"
              accept="image/*"
              placeholder="upload pizza image"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <div className="frm-input">
            <input
              type="number"
              id="price"
              min="1"
              name="price"
              onChange={handleOnChange}
              placeholder="Enter Pizza price in USD"
            />
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default AddProuctPage;
