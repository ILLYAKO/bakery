import React from "react";
import image00 from "../assets/images/image00.jpg";

export const WelcomePart = () => {
  return (
    <>
      <h3>Welcome! </h3>
      <div className="row">
        <div className="col-sm-8 ">
          <img className="img-fluid" src={image00} alt="image00" />
        </div>
        <div className="col-sm-4">
          <form>
            <label htmlFor="searchField">I am looking for</label>
            <input id="searchField" type="text" />
          </form>
        </div>
      </div>
    </>
  );
};
