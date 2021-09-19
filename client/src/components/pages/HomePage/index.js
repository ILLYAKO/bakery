import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import CarouselHomePage from "../../particles/CarouselHomePage";
import Headings from "../../particles/Headings";
import Album from "../../particles/Gallery";
import Features from "../../particles/Features";
import { Context } from "../../../index";

const HomePage = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <CarouselHomePage></CarouselHomePage>
      <Headings></Headings>
      <Album key="homePage"></Album>
      <Features></Features>
    </div>
  );
};

export default observer(HomePage);
