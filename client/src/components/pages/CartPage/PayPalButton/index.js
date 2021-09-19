import React, { useState } from "react";
import PayPal from "./PayPal";

const PayPalButton = ({ total, clearCart }) => {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {checkout ? (
        <PayPal total={total} clearCart={clearCart} />
      ) : (
        <button
          className="btn btn-outline-success text-uppercase mb-3 px-5"
          onClick={() => {
            setCheckout(true);
          }}
        >
          Checkout
        </button>
      )}
    </>
  );
};

export default PayPalButton;
