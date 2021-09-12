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
