import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <React.Fragment>
      <hr className="featurette-divider"></hr>
      <Feature
        title={"First featurette heading. It’ll blow your mind."}
        text={
          "Some great placeholder content for the first featurette here. Imagine some exciting prose here."
        }
        img="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_526/v1631588357/bakery/products/bread/70609d47-e449-42c9-b324-e6fa6a58b96b.jpg"
      ></Feature>
      <hr className="featurette-divider"></hr>
      <Feature
        title={"Oh yeah, it’s that good. See for yourself."}
        text={
          "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place."
        }
        // img={"cheesecake.png"}
        img="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_526/v1631589664/bakery/products/pies/9b815a3c-78c1-43ce-b5c9-40d1575f1aeb.jpg"
      ></Feature>
      <hr className="featurette-divider"></hr>
      <Feature
        title={"And lastly, this one. Checkmate."}
        text={
          "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content."
        }
        img="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_288,w_526/v1631588597/bakery/products/cakes/94eb59fc-61b5-400d-96a3-f99209588e3d.jpg"
      ></Feature>
      <hr className="featurette-divider"></hr>
    </React.Fragment>
  );
};

export default Features;
