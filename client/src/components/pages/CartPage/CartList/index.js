import React from "react";
import CartItem from "../CartItem";

const CartList = ({cart}) => {
  console.log("-->CartList",cart);
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.dataValues.id} item={item} />;
      })}
    </div>
  );
};;

export default CartList;
