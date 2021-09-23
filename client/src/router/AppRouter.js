import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { Context } from "../index";
import DefaultPage from "../components/pages/DefaultPage";
import { privateRouters, publicRouters } from ".";

const AppRouter = () => {
  const { store } = useContext(Context);

  if (store.isAuth) {
    return (
      <Switch>
        {privateRouters.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        {publicRouters.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route render={() => <DefaultPage />}></Route>
      </Switch>
    );
  }

  return (
    <Switch>
      {publicRouters.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route render={() => <DefaultPage />}></Route>
    </Switch>
  );
};

export default AppRouter;
