import React, { useState } from "react";
import Album from "../../../particles/Album";

const BakingPage = () => {
  // eslint-disable-next-line
  const [title, setTitle] = useState("Baking process");
  // eslint-disable-next-line
  const [description, setDescription] = useState([
    '"Baking, process of cooking by dry heat, especially in some kind of oven. It is probably the oldest cooking method. Bakery products, which includebread, rolls, cookies, pies, pastries, and muffins, are usually prepared from flour or meal derived from some form of grain. Bread, a common staple in prehistoric times, provides many nutrients in the human diet."',
    <br key={title + 0} />,
    "( ",
    <a key={title + 1} href="https://www.britannica.com/topic/baking">
      Britannica
    </a>,
    " )",
  ]);
  // eslint-disable-next-line
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675876/bakery/baking/d3532cac-bafd-45ca-94f4-bea36039d8f5.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675902/bakery/baking/d6f09ef3-f42f-41d6-b89c-4e4fef70328b.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675908/bakery/baking/7e52e8fa-3432-4d7f-9d99-506c0b6a62aa.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675913/bakery/baking/88075910-139a-4d07-bc0a-0ceaf19975ba.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675851/bakery/baking/91c46417-c9bf-4e74-8e42-bd89eff7192a.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675887/bakery/baking/48653926-3198-461b-8023-ce1279e27784.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675898/bakery/baking/0748671a-ae1d-499d-b2b4-b66b61c3d682.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631675893/bakery/baking/ae0515c7-0c38-4445-89e0-2a4454f7f604.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631722377/bakery/baking/29474cf1-26a8-40c4-9c18-15c4451fc41b.jpg",
  ]);

  return (
    <div>
      <Album
        key={title}
        title={title}
        description={description}
        images={images}
      ></Album>
    </div>
  );
};

export default BakingPage;
