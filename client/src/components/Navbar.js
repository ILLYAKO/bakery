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
    <>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <div className="container">
            <NavLink to="/" className="brand-logo">
              Logo
            </NavLink>
            {props.isAuthenticated ? (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/" onClick={logoutHandler}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register now</NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="nav-wrapper">
          <div className="container">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/">Our products</NavLink>
              </li>
              {props.isAuthenticated ? (
                <li>
                  <NavLink to="/addproduct">Add product</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/">Contact us</NavLink>
                </li>
              )}
            </ul>

            <NavLink to="/cart" className="right brand-logo">
              Cart
            </NavLink>
          </div>
        </div>
      </nav>

      {/* <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul> */}
    </>
  );
};
