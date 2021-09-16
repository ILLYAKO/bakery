import React from "react";

const HeaderOfAlbum = ({ title, description }) => {
  return (
    <React.Fragment>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{title}</h1>
            <p className="lead text-muted">{description}</p>
            <p>
              <a href="/home" className="btn btn-primary my-2">
                Try our products
              </a>
              <a href="/about" className="btn btn-secondary my-2">
                About us
              </a>
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeaderOfAlbum;
