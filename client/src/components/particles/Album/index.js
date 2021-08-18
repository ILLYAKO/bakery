import React from "react";
import ItemOfAlbum from "./ItemOfAlbum";

const Album = () => {
  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ItemOfAlbum img={"cookies.png"} title={"Cookies"}></ItemOfAlbum>
          <ItemOfAlbum
            img={"cheesecake.png"}
            title={"Cheesecake"}
          ></ItemOfAlbum>
          <ItemOfAlbum img={"croissant.png"} title={"Croissant"}></ItemOfAlbum>

          <ItemOfAlbum
            img={"cheesecake.png"}
            title={"Cheesecake"}
          ></ItemOfAlbum>
          <ItemOfAlbum img={"croissant.png"} title={"Croissant"}></ItemOfAlbum>
          <ItemOfAlbum img={"cookies.png"} title={"Cookies"}></ItemOfAlbum>
          <ItemOfAlbum img={"croissant.png"} title={"Croissant"}></ItemOfAlbum>
          <ItemOfAlbum img={"cookies.png"} title={"Cookies"}></ItemOfAlbum>
          <ItemOfAlbum
            img={"cheesecake.png"}
            title={"Cheesecake"}
          ></ItemOfAlbum>
        </div>
      </div>
    </div>
  );
};

export default Album;
