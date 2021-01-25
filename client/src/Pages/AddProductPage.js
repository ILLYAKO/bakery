import React from "react";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
const { v4: uuidv4 } = require("uuid");

export const AddProductPage = () => {
  const [formProduct, setFormProduct] = useState({
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
  const { loading, request } = useHttp();
  const changeHandler = (event) => {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
  };

  const addProductHandler = async (event) => {
    event.preventDefault();
    const userId = uuidv4();
    await setFormProduct({
      ...formProduct,
      id: userId,
    });

    try {
      console.log(" --> addProductHandler:", formProduct);
      const data = await request("/api/product/add", "POST", {
        ...formProduct,
      });
      console.log("data: ", data);
      message(data.message);
    } catch (e) {
      console.log("addProductHandler-Error");
    }
  };

  return (
    <div className="container">
      <form className="m-3">
        <h5>Add Product</h5>
        <div className="form-group row">
          <label htmlFor="title" class="col-sm-2 col-form-label">
            Title
          </label>
          <input
            placeholder="Enter product title"
            id="title"
            type="text"
            name="title"
            className="col form-control"
            value={formProduct.title}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="imgUrl" class="col-sm-2 col-form-label">
            Image Url
          </label>
          <input
            placeholder="Enter image url"
            id="imgUrl"
            type="text"
            name="imgUrl"
            className="col form-control"
            value={formProduct.imgUrl}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group row">
          <label htmlFor="price" class="col-sm-2 col-form-label">
            Price
          </label>{" "}
          <input
            placeholder="Enter price"
            id="price"
            type="text"
            name="price"
            className="col form-control"
            value={formProduct.price}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group row">
          <label htmlFor="company" class="col-sm-2 col-form-label">
            Company
          </label>
          <input
            placeholder="Enter product company"
            id="company"
            type="text"
            name="company"
            className="col form-control"
            value={formProduct.company}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group row">
          <label htmlFor="info" class="col-sm-2 col-form-label">
            Info
          </label>
          <textarea
            placeholder="Enter info"
            id="info"
            type="text"
            name="info"
            className="col form-control"
            value={formProduct.info}
            onChange={changeHandler}
          />
        </div>

        <button
          className="col btn btn-success"
          onClick={addProductHandler}
          disabled={loading}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
