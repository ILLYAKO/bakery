import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes();
  return (
    <>
      <Router>
        <Navbar />
        {routes}
        {/**/}
        {/* <Modal /> */}
        {/**/}
        <Footer />
      </Router>
    </>
  );
};
export default App;
