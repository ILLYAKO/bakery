import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { CartColumns } from "./CartColumns";
import { CartItem } from "./CartItem";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export const Cart = () => {
  const history = useHistory();
  const value = useProduct();
  const { productsInCart } = value;
  return productsInCart.length > 0 ? (
    <div className="container">
      <CartColumns />
      {console.log("value.productsInCart", value.productsInCart)}
      <CartList value={value} />
      <CartTotals value={value} history={history} />
    </div>
  ) : (
    <EmptyCart />
  );
};
