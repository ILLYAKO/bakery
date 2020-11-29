import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { WelcomePage } from "./Pages/WelcomePage";
import { CartPage } from "./Pages/CartPage.js";

export const useRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Redirect to="/" />
        {/* <Route path="/details" component={Details} />
          
          <Route component={Default} /> */}
      </Switch>
    </>
  );
};
