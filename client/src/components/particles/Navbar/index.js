import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";

const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Bakery
        </a>
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
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            {store.isAuth ? (
              <li className="nav-item">
                <a className="nav-link " href="  /user/dashborad">
                  Dashboard
                </a>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item">
              <a className="nav-link" href="/product/album">
                Album
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/product/cakes">
                    Cakes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/product/pies">
                    Pies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/product/cookies">
                    Cookies
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-r mb-2 mb-lg-0">
            {store.isAuth ? (
              <>
                <h3>Hello User: {store.user.email}</h3>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    href='/'
                    onClick={() => {
                      store.logout();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/user/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user/login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <a href="/cart" className="text-decoration-none">
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
          </a>
        </div>
      </div>
    </nav>
  );
};

export default observer(Navbar);
