// import React, { useContext } from "react";
// import { useState, useEffect } from "react";
import React from "react";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
const { v4: uuidv4 } = require("uuid");



export const AddProductPage = () => {
  const [formProduct, setFormProduct] = useState({
    // id: "",
    title: "",
    imgUrl: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0,
  });
  const message = useMessage();
  // const { loading, request, error, clearError } = useHttp();
  const { loading, request } = useHttp();

  const changeHandler = (event) => {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
  };

  const addProductHandler = async () => {
    const userId = uuidv4();
    await setFormProduct({
      ...formProduct,
      id: userId,
    });

    try {
      console.log(" --> addProductHandler:", formProduct);
      const data = await request("/api/product/add", "POST", {...formProduct})
      console.log("data: ", data);
      message(data.message);
    } catch (e) {
      console.log("addProductHandler-Error");
    }
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
                  placeholder="Enter product title"
                  id="title"
                  type="text"
                  name="title"
                  className="yellow-input"
                  value={formProduct.title}
                  onChange={changeHandler}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter image url"
                  id="imgUrl"
                  type="text"
                  name="imgUrl"
                  className="yellow-input"
                  value={formProduct.imgUrl}
                  onChange={changeHandler}
                />
                <label htmlFor="imgUrl">Image Url</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter price"
                  id="price"
                  type="text"
                  name="price"
                  className="yellow-input"
                  value={formProduct.price}
                  onChange={changeHandler}
                />
                <label htmlFor="price">Price</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter product company"
                  id="company"
                  type="text"
                  name="company"
                  className="yellow-input"
                  value={formProduct.company}
                  onChange={changeHandler}
                />
                <label htmlFor="company">Company</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter info"
                  id="info"
                  type="text"
                  name="info"
                  className="yellow-input"
                  value={formProduct.info}
                  onChange={changeHandler}
                />
                <label htmlFor="info">Info</label>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn grey lighten-1 black-text"
                onClick={addProductHandler}
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
