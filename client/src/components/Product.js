import React from "react";
import { useProduct } from "../context/ProductContext";

export const Product = (props) => {
  const shortLink = require(`../assets/images/${props.product.imgUrl}`);
  const value = useProduct();

  const addToCartHandler =  (id) => {
    console.log(`hello from add To Cart. Id is ${id}`);
     value.addProductInCart(id);
  };

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img
            src={shortLink.default.toString()}
            alt={`${props.product.title} -$${props.product.price}`}
            title={`${props.product.title} -$${props.product.price}`}
          />
          <span className="card-title watermark-text">
            {props.product.title}
          </span>
        </div>
        <div className="card-content">
          <p>{props.product.info}</p>
        </div>
        <div className="card-footer row">
          <p className="col">{props.product.title}</p>
          <h4 className="col">
            <span className="mr-1">$</span>
            {props.product.price}
          </h4>
          <button
            title={!props.product.inCart ? "Add to Cart" : "Product in Cart"}
            disabled={props.product.inCart}
            className="col"
            onClick={
 
              () => {
               addToCartHandler(props.product.id);
              
            }

          }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
