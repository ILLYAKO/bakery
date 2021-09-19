import React from "react";
import { Link } from "react-router-dom";

const Heading = ({ title, text, img, refUrl }) => {
  return (
    <div className="col-lg-4 text-center">
      <img
        className="bd-placeholder-img rounded-circle"
        height="200px"
        width="200px"
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>
        <Link to={refUrl} className="btn btn-secondary">
          View details &raquo;
        </Link>
      </p>
    </div>
  );
};

export default Heading;
