import React from "react";

const Heading = ({ title, text, img }) => {
  return (
    <div className="col-lg-4 text-center">
      {/* <svg
        className="bd-placeholder-img rounded-circle"
        width="140"
        height="140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 140x140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >

        <title>Placeholder-{title}</title>
        <rect width="100%" height="100%" fill="#777" />
        <text x="50%" y="50%" fill="#777" dy=".3em">
          140x140
        </text>
      </svg> */}
      <img
        className="bd-placeholder-img rounded-circle w-100"
        src={require("../../../../assets/images/" + img).default.toString()}
        alt={title}
        // width="160"
        // height="160"
      />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>
        <a className="btn btn-secondary" href="#">
          View details &raquo;
        </a>
      </p>
    </div>
  );
};

export default Heading;
