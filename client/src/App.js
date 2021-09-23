import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import Footer from "./components/particles/Footer";
import NavbarComponent from "./components/particles/NavbarComponent";
import { Context } from "./index";
import ModalProduct from "./components/particles/ModalProduct";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router basename={"/bakery"}>
      <div className="d-flex flex-column h-100">
        <header className="mb-5">
          <NavbarComponent />
        </header>
        <AppRouter />
        <ModalProduct />
        <footer className="footer mt-auto">
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
};
export default observer(App);
