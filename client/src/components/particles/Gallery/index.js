import React, { useContext } from "react";
import ItemOfGallery from "./ItemOfGallery";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";

const Gallery = () => {
  const { store } = useContext(Context);
  return (
    <div className="gallery py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {store.products &&
            store.products.map((product) => {
              return (
                <ItemOfGallery
                  key={product.dataValues.id}
                  id={product.dataValues.id}
                  img={product.imageUrl}
                  title={product.dataValues.title}
                  price={product.dataValues.productPrice}
                ></ItemOfGallery>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default observer(Gallery);
