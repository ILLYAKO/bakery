import React from "react";
import ItemOfGallery from "./ItemOfGallery";

const Gallery = () => {
  return (
    <div className="gallery py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ItemOfGallery img={"cookies.png"} title={"Cookies"}></ItemOfGallery>
          <ItemOfGallery
            img={"cheesecake.png"}
            title={"Cheesecake"}
          ></ItemOfGallery>
          <ItemOfGallery img={"croissant.png"} title={"Croissant"}></ItemOfGallery>

          <ItemOfGallery
            img={"cheesecake.png"}
            title={"Cheesecake"}
          ></ItemOfGallery>
          <ItemOfGallery img={"croissant.png"} title={"Croissant"}></ItemOfGallery>
          <ItemOfGallery img={"cookies.png"} title={"Cookies"}></ItemOfGallery>
          <ItemOfGallery img={"croissant.png"} title={"Croissant"}></ItemOfGallery>
          <ItemOfGallery img={"cookies.png"} title={"Cookies"}></ItemOfGallery>
          <ItemOfGallery
            img={"cheesecake.png"}
            title={"Cheesecake"}
          ></ItemOfGallery>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
