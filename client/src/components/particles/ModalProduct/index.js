import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { Link } from "react-router-dom";
import "./style.css";

const ModalProduct = () => {
  const { store } = useContext(Context);
  const { modalOpen } = store;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>item added to the cart</h5>
              <img
                className="img-fluid"
                src={store?.detailProduct?.imageUrl}
                alt="product"
              />
              <h5>{store?.detailProduct?.dataValues?.title}</h5>
              <h5 className="text-muted">
                {" "}
                price: $ {store?.detailProduct?.dataValues?.productPrice}
              </h5>
              <Link to="/home">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    store.closeModal();
                  }}
                >
                  Store
                </button>
              </Link>
              <Link to="/cart">
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => {
                    store.closeModal();
                  }}
                >
                  Go to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default observer(ModalProduct);
