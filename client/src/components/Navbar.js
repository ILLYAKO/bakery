import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = (props) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand mb-0 h1">
            BAKERY
          </NavLink>
          <div className="d-flex" id="navbarNav">
            {props.isAuthenticated ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" onClick={logoutHandler}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="ml-3">
                    Register now
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" id="nav-mobile">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item ml-2 ">
              <NavLink to="/">Our products</NavLink>
            </li>
            {props.isAuthenticated ? (
              <li className="nav-item ml-2">
                <NavLink to="/addproduct">Add product</NavLink>
              </li>
            ) : (
              <li className="nav-item ml-2">
                <NavLink to="/">Contact us</NavLink>
              </li>
            )}
          </ul>

          <NavLink to="/cart" className="d-flex">
            Cart
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
