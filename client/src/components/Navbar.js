// import React, { useContext } from "react";
import React from "react";
// import { NavLink, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <div className="container">
            <NavLink to="/" className="brand-logo">
              Logo
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Login</NavLink>
              </li>
              <li>
                <NavLink to="/">Register now</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-wrapper">
            
          <NavLink to="/" className="brand-logo right">
            Your Cart
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/">Our products</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact us</NavLink>
            </li>
          </ul>
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
    </div>
  );
};
