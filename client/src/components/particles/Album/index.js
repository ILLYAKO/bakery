import React from "react";
import HeaderOfAlbum from "./HeaderOfAlbum";
import ItemOfAlbum from "./ItemOfAlbum";

const Album = () => {
  return (
    <React.Fragment>
      <HeaderOfAlbum></HeaderOfAlbum>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
            <ItemOfAlbum></ItemOfAlbum>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
