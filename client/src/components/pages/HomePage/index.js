import React, { useEffect, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import CarouselHomePage from "../../particles/CarouselHomePage";
import Headings from "../../particles/Headings";
import Album from "../../particles/Gallery";
import Features from "../../particles/Features";
import { Context } from "../../../index";

const HomePage = () => {
  const { store } = useContext(Context);
  // const [produts, setProduts] = useState(store.products);

  useEffect(() => {
    store.getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <CarouselHomePage></CarouselHomePage>
      <Headings></Headings>
      <Album ></Album>
      <Features></Features>
    </div>
  );
};

export default observer(HomePage);
