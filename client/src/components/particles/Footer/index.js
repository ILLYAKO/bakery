import React from "react";
import { Link } from "react-router-dom";
// import { REACT_PUBLIC_URL } from "../../../http";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid pt-1 navbar-light bg-light">
        <div className="row">
          <div className="col-2">
            <h5>Bakery</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/product/baking" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/product/baking`}
                  className="nav-link p-0 text-muted"
                > */}
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/about`}
                  className="nav-link p-0 text-muted"
                > */}
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Products</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/product/baking" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/product/baking`}
                  className="nav-link p-0 text-muted"
                > */}
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/about`}
                  className="nav-link p-0 text-muted"
                > */}
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h5>Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/product/baking" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/product/baking`}
                  className="nav-link p-0 text-muted"
                > */}
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/home`}
                  className="nav-link p-0 text-muted"
                > */}
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-muted">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/about`}
                  className="nav-link p-0 text-muted"
                > */}
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <Link to="/about" className="btn btn-primary my-2">
                {/* <Link
                  to={`${REACT_PUBLIC_URL}/about`}
                  className="btn btn-primary my-2"
                > */}
                  Subscribe
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center border-top">
          <span>&copy; 2021 Illya, Inc. All rights reserved.</span>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link to="/" className="link-dark">
              {/* <Link to={`${REACT_PUBLIC_URL}/`} className="link-dark"> */}
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter" />
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/" className="link-dark">
              {/* <Link to={`${REACT_PUBLIC_URL}/`} className="link-dark"> */}
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram" />
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/" className="link-dark" href="/">
              {/* <Link to={`${REACT_PUBLIC_URL}/`} className="link-dark" href="/"> */}
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook" /> xlinkHref
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
