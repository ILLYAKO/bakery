import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {WelcomePage} from "./Pages/WelcomePage"

 

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <div className="container">{routes}</div>*/}
        <WelcomePage />
        

        <Footer />
      </Router>
    </div>
  );
};
export default App;
