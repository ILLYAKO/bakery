import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, imgUrl, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  const shortLink = imgUrl ? require(`../../assets/images/${imgUrl}`) : "";
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col l2 s12 mx-auto col-lg-2">
        <img
          src={shortLink.default.toString()}
          style={{ width: "3rem", height: "3rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>

      <div className="col l2 s12 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>

      <div className="col l2 s12 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>
        {price}
      </div>

      <div className="col l2 s12 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-contnet-center">
          <button
            className="btn btn-outline-primary mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </button>
          <span className="btn btn-black mx-1">{count}</span>
          <button
            className="btn btn-outline-primary mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col l2 s12 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash">remove</i>
        </div>
      </div>
      <div className="col l2 s12 mx-auto col-lg-2">
        <strong>item total :${total}</strong>
      </div>
    </div>
  );
}
