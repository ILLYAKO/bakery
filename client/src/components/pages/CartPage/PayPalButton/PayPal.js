import React, { useRef, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../../../..";


const PayPal = ({ total, clearCart }) => {
  const { store } = useContext(Context);

  const history = useHistory();
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                decription: "bakery",
                amount: {
                  currency_code: "CAD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          await store.uploadOrder(order);
          clearCart();
          history.push("/thankspage");
        },
        onError: (err) => {
          console.log("Oreder Error: ", err);
        },
      })
      .render(paypal.current);
    // eslint-disable-next-line
  }, []);
  return (
    <div  >
      <div ref={paypal}></div>
    </div>
  );
};

export default PayPal;
