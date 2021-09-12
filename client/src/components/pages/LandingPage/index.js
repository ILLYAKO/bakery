import React from "react";

const LandingPage = () => {
  return (
    <div className="d-flex align-items-center h-100">
      <div className="container text-center">
        <h1>Wonderful Bakery.</h1>
        <p className="lead">
          our shop has the most delicious cakes and cookies
        </p>
        <p className="lead">
          <a
            href="/"
            className="btn btn-lg btn-secondary fw-bold border-white bg-white"
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
