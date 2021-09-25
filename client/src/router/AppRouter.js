import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import DefaultPage from "../components/pages/DefaultPage";
import { privateRouters, publicRouters } from ".";

const AppRouter = () => {
  const { store } = useContext(Context);
  const { isAuth } = store;

  return isAuth ? (
    <Switch>
      {privateRouters.concat(publicRouters).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route render={() => <DefaultPage />}></Route>
    </Switch>
  ) : (
    <Switch>
      {publicRouters.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route render={() => <DefaultPage />}></Route>
    </Switch>
  );
};

export default observer(AppRouter);
