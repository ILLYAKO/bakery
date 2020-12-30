// import React, { Component } from "react";
// import React from "react";
import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

// import Title from "../Title";
import { CartColumns } from "./CartColumns";
// import EmptyCart from "./EmptyCart";
// import { ProductConsumer } from "../../context";
// import CartList from "./CartList";
// import CartTotals from "./CartTotals";

export const Cart = () => {
  // const [productContext, setProductContext] = useContext(ProductContext);
  const prodContext = useContext(ProductContext);


  return (
    <section>
      <div>
        <h3>Cart: {prodContext.simpleText1}</h3>
        {console.log("Context11", prodContext)}
        <CartColumns />
      </div>
      <h3>Cart </h3>
      {/* <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer> */}
    </section>
  );
};
