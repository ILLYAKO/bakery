import React from "react";
import CarouselMainPage from "../../particles/CarouselMainPage";
import Headings from "../../particles/Headings";
import Album from "../../particles/Album";
import Features from "../../particles/Features";

const MainPage = () => {
  return (
    <div className="container ">
      <CarouselMainPage></CarouselMainPage>
      <Headings></Headings>
      <Album></Album>
      <Features></Features>
    </div>
  );
};

export default MainPage;
