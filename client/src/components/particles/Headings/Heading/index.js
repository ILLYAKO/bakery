import React from "react";

const Heading = ({ title, text, img, refUrl }) => {
  return (
    <div className="col-lg-4 text-center">
      <img
        className="bd-placeholder-img rounded-circle"
        // src={require("../../../../assets/images/" + img).default.toString()}
        height="200px"
        width="200px"
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>
        <a className="btn btn-secondary" href={refUrl}>
          View details &raquo;
        </a>
      </p>
    </div>
  );
};

export default Heading;
