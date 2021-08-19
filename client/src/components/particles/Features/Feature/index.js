import React from "react";

const Feature = ({ title, text, img }) => {
  return (
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">
          {title.split(".")[0]}.
          <span className="text-muted">{title.split(".")[1]}.</span>
        </h2>
        <p className="lead">{text}</p>
      </div>
      <div className="col-md-5">
        {/* <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg> */}
        <img
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto w-100"
          src={require("../../../../assets/images/" + img).default.toString()}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Feature;
