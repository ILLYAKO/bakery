import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../";
import PayPalButton from "../PayPalButton";

const CartTotals = (history) => {
  const { store } = useContext(Context);
  const { cartSubTotal, cartTax, cartTotal, clearCart } = store;
  return (
    <React.Fragment>
      <div className="row">
        {/* <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize "> */}
        <div className="col-11 text-end">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => {
                clearCart();
              }}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong>$ {parseFloat(cartSubTotal).toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">tax :</span>
            <strong>$ {parseFloat(cartTax).toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">total :</span>
            <strong>$ {parseFloat(cartTotal).toFixed(2)}</strong>
          </h5>
          <PayPalButton
            total={parseFloat(cartTotal).toFixed(2)}
            clearCart={clearCart}
            history={history}
          />
        </div>
      </div>
    </React.Fragment>
  );
};;

export default CartTotals;
