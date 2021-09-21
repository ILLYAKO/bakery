import React from "react";
import { Link } from "react-router-dom";
// import { REACT_PUBLIC_URL } from "../../../http";

const ThanksPage = () => {
  return (
    <div
      className="d-flex align-items-center h-100"
      style={{
        backgroundImage:
          "url(" +
          require("../../../assets/images/thanks-background.jpg").default.toString() +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container text-center">
        <h1>Thank you for your purchase!</h1>
        <p className="lead">The products will be shipped soon.</p>
        <p className="lead">
          <Link to="/home" className="btn btn-lg fw-bold">
          {/* <Link to={`${REACT_PUBLIC_URL}/home`} className="btn btn-lg fw-bold"> */}
            Try something else!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ThanksPage;
