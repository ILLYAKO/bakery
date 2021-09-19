import React from "react";
import Heading from "./Heading";

function Headings() {
  return (
    <div className="row mb-5">
      <Heading
        title={"Cookies"}
        text={
          "Some representative placeholder content for the three columns of text below the carousel. This is the first column."
        }
        img={
          "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_200,w_200/v1631655589/bakery/products/cookies/943f4324-d01d-435d-b6b0-b14db760ba34.jpg"
        }
        refUrl="/product/cookies"
      ></Heading>

      <Heading
        title={"Cheesecake"}
        text={
          "Another exciting bit of representative placeholder content. This time, we've moved on to the second column."
        }
        img={
          "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_200,w_200/v1631588572/bakery/products/cakes/c53a18e8-4d61-4eb8-99a2-aec3a6c58b56.jpg"
        }
        refUrl="/product/pies"
      ></Heading>

      <Heading
        title={"Croissant"}
        text={
          "And lastly this, the third column of representative placeholder content."
        }
        img={
          "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_200,w_200/v1631656367/bakery/products/cookies/05dff74a-9f76-4435-8638-3cbedadfa255h_hjhvvl.jpg"
        }
        refUrl="/product/cakes"
      ></Heading>
    </div>
  );
}

export default Headings;
