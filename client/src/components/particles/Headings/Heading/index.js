import React from "react";

const Heading = ({ title, text, img }) => {
  return (
    <div className="col-lg-4 text-center">
      <img
        className="bd-placeholder-img rounded-circle w-100"
        src={require("../../../../assets/images/" + img).default.toString()}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>
        <a className="btn btn-secondary" href="/">
          View details &raquo;
        </a>
      </p>
    </div>
  );
};

export default Heading;
