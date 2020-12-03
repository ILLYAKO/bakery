import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { WelcomePage } from "./Pages/WelcomePage";
import { Cart } from "./components/Cart";
import { LoginPage } from "./Pages/LoginPage";
import { AddProductPage } from "./Pages/AddProductPage";
import { RegisterPage } from "./Pages/RegisterPage";

export const useRoutes = (isAuthenticated) => {

  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/addproduct" exact>
          <AddProductPage />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Redirect to="/" />
        {/* <Route path="/details" component={Details} />          
          <Route component={Default} /> */}
      </Switch>
    );
  }
};
