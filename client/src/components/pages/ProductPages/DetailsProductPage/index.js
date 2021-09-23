import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../..";
import "./style.css";

const DetailsProductPage = () => {
  const { store } = useContext(Context);
  let { id } = useParams();

  useEffect(() => {
    store.handleDetail(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue text-uppercase my-5">
          <h1>{store?.detailProduct?.dataValues?.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img
            className="img-fluid"
            src={store?.detailProduct?.imageUrl}
            alt={store?.detailProduct?.dataValues?.title}
          />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>{store?.detailProduct?.dataValues?.segment}</h2>
          <h4 className="text-title text-capitalize text-muted mt-3 mb-2">
            made by:{" "}
            <span className="text-uppercase">
              {store?.detailProduct?.dataValues?.vendor}
            </span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price:<span> $</span>
              {store?.detailProduct?.dataValues?.productPrice}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            {store?.detailProduct?.dataValues?.description}
          </p>
          <div className="pt-1">
            <Link to="/home">
              <button className="btn btn-secondary">Back to products</button>
            </Link>
            <button
              className="btn btn-primary mx-1"
              disabled={false ? true : false}
              onClick={(e) => {
                e.preventDefault();
                store.addToCart(id);
                store.openModal(id);
              }}
            >
              {false ? "inCart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(DetailsProductPage);
