import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <React.Fragment>
      <hr class="featurette-divider"></hr>
      <Feature
        title={"First featurette heading. It’ll blow your mind."}
        text={
          "Some great placeholder content for the first featurette here. Imagine some exciting prose here."
        }
        img={"cookies.png"}
      ></Feature>
      <hr class="featurette-divider"></hr>
      <Feature
        title={"Oh yeah, it’s that good. See for yourself."}
        text={
          "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place."
        }
        img={"cheesecake.png"}
      ></Feature>
      <hr class="featurette-divider"></hr>
      <Feature
        title={"And lastly, this one. Checkmate."}
        text={
          "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content."
        }
        img={"cookies.png"}
      ></Feature>
      <hr class="featurette-divider"></hr>
    </React.Fragment>
  );
};

export default Features;
