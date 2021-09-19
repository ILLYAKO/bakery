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
  if (cart.length > 0) {
    return (
      <React.Fragment>
        <CartTitle name="your" title="cart" />
        <CartColumns />
        <CartList cart={cart} />
        <CartTotals value={store} history={history} />
      </React.Fragment>
    );
  } else {
    return <EmptyCart />;
  }
};

export default observer(CartPage);
