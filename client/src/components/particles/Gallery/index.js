import React, { useContext } from "react";
import ItemOfGallery from "./ItemOfGallery";
import { observer } from "mobx-react-lite";

import { toJS } from "mobx";
import { Context } from "../../..";


const Gallery = () => {
  const { store } = useContext(Context);
  return (
    <div className="gallery py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {store.products && store.products.map((product) => {
            return (
              <ItemOfGallery
                key={product.dataValues.id}
                img={product.imageUrl}
                title={product.dataValues.title}
              ></ItemOfGallery>
            );
          })}

          {/* <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631589276/bakery/products/cookies/3af09682-e4c3-4bce-a231-78114eb1737f.jpg"
            }
            title={"Cookies"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631588608/bakery/products/cakes/a545a63b-f5ac-4f4b-8fc5-b6c234768806.jpg"
            }
            title={"Cheesecake"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631589313/bakery/products/cookies/0a0d4c21-3a97-4034-b404-cbdea97438a2.jpg"
            }
            title={"Croissant"}
          ></ItemOfGallery>

          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631588601/bakery/products/cakes/2e940dc0-c133-4254-8dd0-bca4308ce810.jpg"
            }
            title={"Cheesecake"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631589421/bakery/products/cookies/05dff74a-9f76-4435-8638-3cbedadfa255.jpg"
            }
            title={"Croissant"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631589417/bakery/products/cookies/ce4aeaa7-d534-44bc-abed-7b9c3c1e950e.jpg"
            }
            title={"Cookies"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631589329/bakery/products/cookies/2c82fefb-e028-4473-a51a-abd0944e0f56.jpg"
            }
            title={"Croissant"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631588691/bakery/products/cakes/9ff79bb4-2fd4-46a8-8145-78e74a574ee6.jpg"
            }
            title={"Cookies"}
          ></ItemOfGallery>
          <ItemOfGallery
            img={
              "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_412/v1631588293/bakery/products/bread/b5180b01-bdfa-4c26-a03a-6fdbaea0d614.jpg"
            }
            title={"Cheesecake"}
          ></ItemOfGallery> */}

          {/* ///// */}
        </div>
      </div>
    </div>
  );
};

export default observer(Gallery);
