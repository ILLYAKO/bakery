import React from 'react'
import image00 from "../assets/image00.JPG";

export const WelcomePart = () => {
    return (
      <>
        <h2>Welcome! </h2>
        <div className="row">
          <div className="col s8">
            <img className="responsive-img" src={image00} alt="image00" />
          </div>
          <div className="col s4">
            <form>
              <label htmlFor="searchField">I am looking for</label>
              <input id="searchField" type="text" />
            </form>
          </div>    
        </div>
      </>
    );
}
