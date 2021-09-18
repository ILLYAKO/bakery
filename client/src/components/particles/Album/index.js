import React from "react";
import HeaderOfAlbum from "./HeaderOfAlbum";
import ItemOfAlbum from "./ItemOfAlbum";

const Album = ({ title, description, images }) => {
  return (
    <React.Fragment>
      <HeaderOfAlbum
        title={title}
        description={description}
      ></HeaderOfAlbum>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {images.map((image, i) => (
              <ItemOfAlbum key={i} img={image}></ItemOfAlbum>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
