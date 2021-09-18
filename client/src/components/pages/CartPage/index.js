import React, { useContext } from "react";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";
import CartTitle from "./CartTitle";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import { Context } from "../../../";

const CartPage = () => {
  const history = useHistory();
  const { store } = useContext(Context);
  const { cart } = store;

  console.log("-->CartPage-store-cart", cart.length);


  if (cart?.lenght <= 0) {
    return <EmptyCart />;
  } else {
    return (
      <React.Fragment>
        <CartTitle name="your" title="cart" />
        <CartColumns />
        <CartList cart={cart} />
        <CartTotals value={store} history={history} />
      </React.Fragment>
    );
  }
};

export default observer(CartPage);
