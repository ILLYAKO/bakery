import React from "react";
import { storeProducts } from "../assets/data";
import { Product } from "./Product";

export const ProductList = () => {
  return (
    <div className="row">
      <h2>Product List</h2>      
        {storeProducts.map((product) => {
          return (
              <Product product={product} />
          );
        })}
      
    </div>
  );
};
