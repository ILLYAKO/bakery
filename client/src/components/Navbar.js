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
        <div class="container-fluid">
          <NavLink to="/" className="brand-logo">
            Logo
          </NavLink>
          <div className="d-flex" id="navbarNav">
            {props.isAuthenticated ? (
              <ul className="navbar-nav">
                <li class="nav-item">
                  <NavLink to="/" onClick={logoutHandler}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li class="nav-item">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/register">Register now</NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      {/* //// */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" id="nav-mobile">
          <ul className="navbar-nav">
            <li class="nav-item ">
              <NavLink to="/">home</NavLink>
            </li>
            <li class="nav-item ml-2 ">
              <NavLink to="/">Our products</NavLink>
            </li>
            {props.isAuthenticated ? (
              <li class="nav-item ml-2">
                <NavLink to="/addproduct">Add product</NavLink>
              </li>
            ) : (
              <li class="nav-item ml-2">
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
