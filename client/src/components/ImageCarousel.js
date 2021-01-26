// import React from "react";
// import ImageGallery from "react-image-gallery";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }

import React from 'react'
import ImageGallery from "react-image-gallery";
import image00 from "../assets/images/begale.png";

export default function ImageCarousel() {
    const shortLink = require("../assets/images/begale.png");
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
  return (
  

      <ImageGallery items={images} />
  );
}

