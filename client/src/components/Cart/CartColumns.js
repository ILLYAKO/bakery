import React from "react";

export const CartColumns = () => {
  return (
    <div className="container-fluid center-align d-none d-lg-block">
      <div className="row">
        <div className="col l2 s12 ">
          <p className="text-uppercase">products</p>
        </div>
        <div className="col l2 s12 ">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col l2 s12 ">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col l2 s12 ">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col l2 s12 ">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col l2 s12 ">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
};
