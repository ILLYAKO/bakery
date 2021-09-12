import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import Footer from "./components/particles/Footer";
import Navbar from "./components/particles/Navbar";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/UserPages/LoginPage";
import RegisterPage from "./components/pages/UserPages/RegisterPage/";
import AlbumPage from "./components/pages/ProductPages/AlbumPage";
import CakesPages from "./components/pages/ProductPages/CakesPages";
import PiesPages from "./components/pages/ProductPages/PiesPages";
import AboutPage from "./components/pages/AboutPage";
import CartPage from "./components/pages/CartPage";
import DashBoard from "./components/pages/DashBoard";
import { Context } from "./index";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <header className="mb-5">
          <Navbar></Navbar>
        </header>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route exact path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route path="/user/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/user/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/user/dashborad">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/user/logout">
            <Redirect to="/" />
          </Route>
          <Route path="/product/album">
            <AlbumPage></AlbumPage>
          </Route>
          <Route path="/product/cakes">
            <CakesPages></CakesPages>
          </Route>
          <Route path="/product/pies">
            <PiesPages></PiesPages>
          </Route>
          <Route path="/product/cookies">
            <AlbumPage></AlbumPage>
          </Route>
          <Route render={() => <h1>404: page not found</h1>}></Route>
        </Switch>
        <footer className="footer mt-auto">
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
};
export default observer(App);
