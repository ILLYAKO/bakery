import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Redirect,  
} from "react-router-dom";
// import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import Footer from "./components/particles/Footer";
import NavbarComponent from "./components/particles/NavbarComponent";
import LandingPage from "./components/pages/LandingPage";
import ThankPage from "./components/pages/ThanksPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/UserPages/LoginPage";
import RegisterPage from "./components/pages/UserPages/RegisterPage/";
import BakingPage from "./components/pages/ProductPages/BakingPage";
import CookiesPage from "./components/pages/ProductPages/CookiesPages";
import CakesPages from "./components/pages/ProductPages/CakesPages";
import PiesPages from "./components/pages/ProductPages/PiesPages";
import AboutPage from "./components/pages/AboutPage";
import CartPage from "./components/pages/CartPage";
import DashBoard from "./components/pages/DashBoard";
import DetailsProductPage from "./components/pages/ProductPages/DetailsProductPage";
import { Context } from "./index";
import ModalProduct from "./components/particles/ModalProduct";
import DefaultPage from "./components/pages/DefaultPage";

// const history = createBrowserHistory();

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    // eslint-disable-next-line
  }, []);

  return (
    // <Router>
    // <Router history={history} basename={"/bakery"}>
    <Router basename={"/bakery"}>
      <div className="d-flex flex-column h-100">
        <header className="mb-5">
          <NavbarComponent />
        </header>
        <Switch>
          <Route exact path="/">
            {/* <Route exact path={`${REACT_PUBLIC_URL}/`}> */}
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/thankspage">
            {/* <Route exact path={`${REACT_PUBLIC_URL}/thankspage`}> */}
            <ThankPage></ThankPage>
          </Route>
          <Route exact path="/home">
            {/* <Route exact path={`${REACT_PUBLIC_URL}/home`}> */}
            <HomePage></HomePage>
          </Route>
          <Route exact path="/about">
            {/* <Route exact path={`${REACT_PUBLIC_URL}/about`}> */}
            <AboutPage></AboutPage>
          </Route>
          <Route exact path="/cart">
            {/* <Route exact path={`${REACT_PUBLIC_URL}/cart`}> */}
            <CartPage></CartPage>
          </Route>
          <Route path="/user/login">
            {/* <Route path={`${REACT_PUBLIC_URL}/user/login`}> */}
            <LoginPage></LoginPage>
          </Route>
          <Route path="/user/register">
            {/* <Route path={`${REACT_PUBLIC_URL}/user/register`}> */}
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/user/dashborad">
            {/* <Route path={`${REACT_PUBLIC_URL}/user/dashborad`}> */}
            <DashBoard></DashBoard>
          </Route>
          <Route path="/user/logout">
            {/* <Route path={`${REACT_PUBLIC_URL}/user/logout`}> */}
            {/* <Redirect to={`${REACT_PUBLIC_URL}/`} /> */}
            <Redirect to="/" />
          </Route>
          <Route path="/product/baking">
            {/* <Route path={`${REACT_PUBLIC_URL}/product/baking`}> */}
            <BakingPage></BakingPage>
          </Route>
          <Route path="/product/cakes">
            {/* <Route path={`${REACT_PUBLIC_URL}/product/cakes`}> */}
            <CakesPages></CakesPages>
          </Route>
          <Route path="/product/pies">
            {/* <Route path={`${REACT_PUBLIC_URL}/product/pies`}> */}
            <PiesPages></PiesPages>
          </Route>
          <Route path="/product/cookies">
            {/* <Route path={`${REACT_PUBLIC_URL}/product/cookies`}> */}
            <CookiesPage></CookiesPage>
          </Route>
          <Route path="/product/details/:id">
            {/* <Route path={`${REACT_PUBLIC_URL}/product/details/:id`}> */}
            <DetailsProductPage></DetailsProductPage>
          </Route>
          {/* <Route render={() => <h1>404: page not found</h1>}></Route> */}
          <Route render={() => <DefaultPage />}></Route>
        </Switch>
        <ModalProduct />
        <footer className="footer mt-auto">
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
};
export default observer(App);
