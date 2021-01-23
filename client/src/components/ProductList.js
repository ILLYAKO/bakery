import React from "react";
import { Product } from "./Product";
import { useProduct } from "../context/ProductContext";

export const ProductList = () => {
  const { storeProducts } = useProduct();
  return (
    <div className="row">
      <div className="col-12">
        <h3>Product List</h3>
      </div>

      {storeProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
