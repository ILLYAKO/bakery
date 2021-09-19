import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="d-flex align-items-center h-100"
      style={{
        backgroundImage:
          "url(" +
          require("../../../assets/images/croissant-background.jpg").default.toString() +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container text-center">
        <h1>Wonderful Bakery.</h1>
        <p className="lead">
          our shop has the most delicious cakes and cookies
        </p>
        <p className="lead">
          <Link to="/home" className="btn btn-lg fw-bold">
            Try me!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
