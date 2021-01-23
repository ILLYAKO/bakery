import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "materialize-css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  //

  const [testText, setTestText] = useState("Test Context") ;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <ProductProvider >
        <Router>
          <Navbar isAuthenticated={isAuthenticated} />
          {routes}
          <Footer />
        </Router>
      </ProductProvider>
    </AuthContext.Provider>
  );
};
export default App;
