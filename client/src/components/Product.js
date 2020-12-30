import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const Product = (props) => {
  const shortLink = require(`../assets/images/${props.product.imgUrl}`);
  // const [productContext, setProductContext] = useContext(ProductContext);

  const addToCartHandler = (id) => {
    console.log(`hello from add To Cart. Id is ${id}`);
    // () => setContext("New Value");
    // let tempProducts = [...this.state.products];
    // const index = tempProducts.indexOf(this.getItem(id));
    // const product = tempProducts[index];
    // product.inCart = true;
    // product.count = 1;
    // const price = product.price;
    // product.total = price;
    // this.setState(
    //   () => {
    //     return {
    //       products: tempProducts,
    //       cart: [...this.state.cart, product],
    //     };
    //   },
    //   () => {
    //     this.addTotals();
    //   }
    // );
  };

  // console.log("shortLink:", shortLink.default);
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          {/* <img
            src="https://raw.githubusercontent.com/ILLYAKO/bakery-repository/main/images/products/Birthday.png"
            alt="bakery"
          /> */}
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
            className="col"
            onClick={() => {
              addToCartHandler(props.product._id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
