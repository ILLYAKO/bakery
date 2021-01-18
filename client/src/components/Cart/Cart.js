// import React, { Component } from "react";
// import React from "react";
import React, { useContext } from "react";
import { useProduct } from "../../context/ProductContext";

// import Title from "../Title";
import { CartColumns } from "./CartColumns";
import { CartItem } from "./CartItem";
import EmptyCart from "./EmptyCart";
// import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export const Cart = () => {
  // const [productContext, setProductContext] = useContext(ProductContext);
  const value = useProduct();
  // let i = 0;
  return value.productsInCart.length > 0 ? (
    <>
      <CartColumns />
      {console.log("value.productsInCart", value.productsInCart)}
      <CartList value={value} />
      {
        // productsInCart.map((product) => {
        //   return (
        //     <div>
        //       <div
        //         className="container-fluid center-align d-none d-lg-block row"
        //         key={i++}
        //       >
        //         <div className="col l2 s12 ">{product.company}</div>
        //         <div className="col l2 s12 ">{product.title}</div>
        //         <div className="col l2 s12 ">{product.price}</div>
        //         <div className="col l2 s12 ">{product.count}</div>
        //         <div className="col l2 s12 "></div>
        //         <div className="col l2 s12 ">{product.total}</div>
        //       </div>
        //       {/* <CartTotals value={productsInCart} history={this.props.history} /> */}
        //       {/* <CartTotals value={productsInCart} /> */}
        //     </div>
        //   );
        // })
      }
    </>
  ) : (
    <EmptyCart />
  );
};
