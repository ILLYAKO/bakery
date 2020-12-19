import React from "react";
import imageSrc from "../assets/images/begale.png";
const shortLink1 = require('../assets/images/begale.png')




export const Product = (props) => {
  // import imageSrc from "../assets/images/begale.png";
  // const shortLink =   require(`../assets/images/${props.product.imgUrl}`);
  const shortLink = require("../assets/images/begale.png");

  console.log(`../assets/images/${props.product.imgUrl}`);
  console.log("shortLink:", shortLink.default);
  console.log("shortLink1:", shortLink1);
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          {/* <img
            src="https://raw.githubusercontent.com/ILLYAKO/bakery-repository/main/images/products/Birthday.png"
            alt="bakery"
          /> */}
          <img src={imageSrc} alt="bakery" />
          <img src={shortLink1.default.toString()} alt="bakery" />

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
