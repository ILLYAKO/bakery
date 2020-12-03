import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />
        {routes}
        {/**/}
        {/* <Modal /> */}
        {/**/}
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
