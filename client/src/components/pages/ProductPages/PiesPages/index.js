import React, { useState } from "react";
import Album from "../../../particles/Album";

const BakingPage = () => {
  // eslint-disable-next-line
  const [title, setTitle] = useState("Pie");
  // eslint-disable-next-line
  const [description, setDescription] = useState([
    '"Dish made by lining a shallow container with pastry and filling the container with a sweet or savoury mixture. A top crust may be added; the pie is baked until the crust is crisp and the filling is cooked through. Pies have been popular in the United States since colonial times, so much so that apple pie has become symbolic of traditional American home cooking.In the United Kingdom, meat, game, and fish pies have been staple dishes since the Middle Ages. Steak and kidney, pork, game, veal and ham, and poultry are all popular. Tourtière, a pork pie, is one of Canada’s national dishes."',
    <br key={title + 0} />,
    "( ",
    <a key={title + 1} href="https://www.britannica.com/topic/pie">
      Britannica
    </a>,
    " )",
  ]);
  // eslint-disable-next-line
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589666/bakery/products/pies/4d045060-1e69-42fc-bf33-940f9770d80f.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589664/bakery/products/pies/9b815a3c-78c1-43ce-b5c9-40d1575f1aeb.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589670/bakery/products/pies/05d7fecb-cc38-4e00-9d6b-7123090abeb5.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589658/bakery/products/pies/babbf5b0-86a0-43ea-820c-ac00699dee3a.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589654/bakery/products/pies/84d03b6a-0af2-4730-bd47-606cc401b44a.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589637/bakery/products/pies/c5a7deda-8f30-45bd-947c-80be37b0a1f7.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,g_xy_center,h_204,w_420,y_4000/v1631589687/bakery/products/pies/1fa5de35-805e-41c9-837d-f4090085f965.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631589676/bakery/products/pies/ca93365b-70b5-45d3-8f44-b2f7e156dfa6.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_lfill,h_204,w_420/v1631589658/bakery/products/pies/babbf5b0-86a0-43ea-820c-ac00699dee3a.jpg",
  ]);

  return (
    <div>
      <Album
        title={title}
        description={description}
        images={images}
      ></Album>
    </div>
  );
};

export default BakingPage;
