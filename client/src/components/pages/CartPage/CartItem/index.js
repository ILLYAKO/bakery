import React, { useContext } from "react";
import { Context } from "../../../../";

const CartItem = ({ item }) => {
  const { store } = useContext(Context);
  const { imageUrl, quantityInCart, productTotal } = item;
  const { id, title, productPrice } = item.dataValues;
  const { increment, decrement, removeItem } = store;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={imageUrl}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span>
        {productPrice}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-contnet-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{quantityInCart}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span
          className="btn btn-black mx-1"
          onClick={() => {
            removeItem(id);
          }}
        >
          remove
        </span>
        {/* <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash"></i>
        </div> */}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>total :${parseFloat(productTotal).toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default CartItem;
