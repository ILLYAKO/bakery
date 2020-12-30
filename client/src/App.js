import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { ProductContext } from "./context/ProductContext";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  //
  const testContext = useContext(ProductContext);
  
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <ProductContext.Provider value={testContext}>
        <Router>
          <Navbar isAuthenticated={isAuthenticated} />
          {routes}
          <Footer />
        </Router>
      </ProductContext.Provider>
    </AuthContext.Provider>
  );
};
export default App;
