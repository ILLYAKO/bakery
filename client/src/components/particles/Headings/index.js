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
        img={"cookies.png"}
      ></Heading>

      <Heading
        title={"Cheesecake"}
        text={
          "Another exciting bit of representative placeholder content. This time, we've moved on to the second column."
        }
        img={"cheesecake.png"}
      ></Heading>

      <Heading
        title={"Croissant"}
        text={
          "And lastly this, the third column of representative placeholder content."
        }
        img={"croissant.png"}
      ></Heading>
    </div>
  );
}

export default Headings;
