import React from "react";
import CarouselHomePage from "../../particles/CarouselHomePage";
import Headings from "../../particles/Headings";
import Album from "../../particles/Gallery";
import Features from "../../particles/Features";

const HomePage = () => {
  return (
    <div className="container">
      <CarouselHomePage></CarouselHomePage>
      <Headings></Headings>
      <Album></Album>
      <Features></Features>
    </div>
  );
};

export default HomePage;
