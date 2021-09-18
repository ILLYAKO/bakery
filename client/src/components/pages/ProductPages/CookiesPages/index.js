import React, { useState } from "react";
import Album from "../../../particles/Album";

const BakingPage = () => {
  // eslint-disable-next-line
  const [title, setTitle] = useState("Cookie");
  // eslint-disable-next-line
  const [description, setDescription] = useState([
    '"Cookie, (from Dutch koekje, diminutive of koek, “cake”), primarily in the United States, any of various small sweet cakes, either flat or slightly raised, cut from rolled dough, dropped from a spoon, cut into pieces after baking, or curled with a special iron. In Scotland the term cookie denotes a small, plain bun."',
    <br key={title + 0} />,
    "( ",
    <a key={title + 1} href="https://www.britannica.com/topic/baking">
      Britannica
    </a>,
    " )",
  ]);
  // eslint-disable-next-line
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589276/bakery/products/cookies/3af09682-e4c3-4bce-a231-78114eb1737f.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589529/bakery/products/cookies/0da77987-6335-46b7-94a9-f185912069bc.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589514/bakery/products/cookies/943f4324-d01d-435d-b6b0-b14db760ba34.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589544/bakery/products/cookies/ca02272b-e7c1-4270-8f75-210106d2440c.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589522/bakery/products/cookies/2f5b828f-84bc-4096-a3de-cbb332ae5ba7.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589535/bakery/products/cookies/cf31999f-e3a1-4e04-86f3-cf9843ae063e.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589401/bakery/products/cookies/79949129-b52b-4e67-8aa5-8fa4a520b07b.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589329/bakery/products/cookies/2c82fefb-e028-4473-a51a-abd0944e0f56.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589389/bakery/products/cookies/64a2c486-f883-4409-a942-e7f833d8f946.jpg",
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
