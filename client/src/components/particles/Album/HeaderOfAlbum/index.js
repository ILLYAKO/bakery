import React from "react";
import { Link } from "react-router-dom";

const HeaderOfAlbum = ({ title, description }) => {
  return (
    <section key={title} className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{title}</h1>
          <p className="lead text-muted">{description}</p>
        
            <Link to="/home" className="btn btn-primary mx-1">
              Try our products
            </Link>
            <Link to="/about" className="btn btn-secondary mx-1">
              About us
            </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeaderOfAlbum;
