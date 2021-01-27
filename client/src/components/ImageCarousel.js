import React from "react";
import ImageGallery from "react-image-gallery";

export default function ImageCarousel() {
  const images = [
    {
      original: require("../assets/images/begale.png").default.toString(),
      thumbnail: require("../assets/images/begale.png").default.toString(),
    },
    {
      original: require("../assets/images/cheesecake.png").default.toString(),
      thumbnail: require("../assets/images/cheesecake.png").default.toString(),
    },
    {
      original: require("../assets/images/donut.png").default.toString(),
      thumbnail: require("../assets/images/donut.png").default.toString(),
    },
  ];
  return <ImageGallery items={images} />;
}
