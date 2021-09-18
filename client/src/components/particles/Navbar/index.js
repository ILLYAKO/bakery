import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Context } from "../../..";

const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Bakery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            {store.isAuth ? (
              <li className="nav-item">
                <Link to="/user/dashborad" className="nav-link ">
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item">
              <Link to="/product/baking" className="nav-link">
                Baking
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/home"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/product/cakes" className="dropdown-item">
                    Cakes
                  </Link>
                </li>
                <li>
                  <Link to="/product/pies" className="dropdown-item">
                    Pies
                  </Link>
                </li>
                <li>
                  <Link to="/product/cookies" className="dropdown-item">
                    Cookies
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-r mb-2 mb-lg-0">
            {store.isAuth ? (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  role="button"
                  onClick={() => {
                    store.logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/user/register" className="nav-link">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <Link to="/cart" className="text-decoration-none mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default observer(Navbar);
