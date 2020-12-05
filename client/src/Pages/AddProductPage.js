import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
// import { useMessage } from "../hooks/message.hook";

export const AddProductPage = () => {
  const [formProduct, setFormProduct] = useState({
    id: "xxxxx",
    title: "title",
    img: "img",
    price: 0,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor amet.",
    inCart: false,
    count: 0,
    total: 0,
  });
  // const message = useMessage();
  const { loading, request, error, clearError } = useHttp();

  const changeHandler = (event) => {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
  };
  const registerHandler = async () => {
    try {
      console.log("registerHandler");
      const data = await request("/api/auth/register", "POST", {
        ...formProduct,
      });
      // message(data.message);
    } catch (e) {}
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12">
          <h2>Add Product</h2>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Product</span>
              <div className="input-field">
                <input
                  placeholder="Enter your email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  value={formProduct.title}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
