import React from "react";
import { ProductList } from "../components/ProductList";
import { WelcomePart } from "../components/WelcomePart";

export const WelcomePage = () => {
  return (
    <>
      <div className="container">
        <WelcomePart />
        <ProductList />
      </div>
    </>
  );
};
