import React from "react";
import { Product } from "./Product";
import { useProduct } from "../context/ProductContext";

export const ProductList = () => {
  const { storeProducts } = useProduct();
  return (
    <div className="row">
      <h3>Product List</h3>
      {storeProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
