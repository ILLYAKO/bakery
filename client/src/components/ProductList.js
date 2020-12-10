import React from "react";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
// import { storeProducts } from "../assets/data";
import { Product } from "./Product";

export const ProductList = () => {
  const { request } = useHttp();
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {      
        const result = await request("/api/product/products", "POST", {
          products: "allProduct",
        })
        setData(result);
      } catch (e) {
      }
      
    };
    func();
  }, []);
  return (
    <div className="row">
      <h2>Product List</h2>
      {/* {storeProducts.map((product) => { */}
      {data.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
