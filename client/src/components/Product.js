import React from "react";

export const Product = (props) => {
  const shortLink = "./client/src/assets/images/";
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          {/* <img
            src="https://raw.githubusercontent.com/ILLYAKO/bakery-repository/main/images/products/Birthday.png"
            alt="bakery"
          /> */}
          <img src={shortLink + props.product.imgUrl} alt="bakery" />

          <span className="card-title blue-text">{props.product.title}</span>
          {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
        </div>
        <div className="card-content">
          <p>{props.product.info}</p>
          {/* <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p> */}
        </div>
      </div>
    </div>
  );
};
