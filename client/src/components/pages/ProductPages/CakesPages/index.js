import React, { useState } from "react";
import Album from "../../../particles/Album";

const CakesPages = () => {
  // eslint-disable-next-line
  const [title, setTitle] = useState("Cake");
  // eslint-disable-next-line
  const [description, setDescription] = useState([
    '"In general, any of a variety of breads, shortened or unshortened, usually shaped by the tin in which it is baked, or, more specifically, a sweetened bread, often rich or delicate. In the codified cuisine of France, all cakes, or gâteaux, derive from one of eight basic doughs: short pastry, flake pastry, sweet pastry, savarin, brioche, baba, chou pastry, and genoise. To these are added an infinite variety of flavouring and decorative ingredients, such as marzipan, sugar icing, spices, fruits, and cremes. The torte is a very rich cake found throughout Europe, often of numerous thin layers and containing nuts, fruit, creme, and chocolate in combination."',
    <br key={title + 0} />,
    "( ",
    <a key={title + 1} href="https://www.britannica.com/topic/cake">
      Britannica
    </a>,
    " )",
  ]);
  // eslint-disable-next-line
  const [images, setImages] = useState([
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588587/bakery/products/cakes/a02e8d1b-2fbe-4183-8746-ebf92b09cddd.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588556/bakery/products/cakes/078a6b99-b183-4028-9637-972a172ac3a4.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588691/bakery/products/cakes/9ff79bb4-2fd4-46a8-8145-78e74a574ee6.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588597/bakery/products/cakes/94eb59fc-61b5-400d-96a3-f99209588e3d.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588608/bakery/products/cakes/a545a63b-f5ac-4f4b-8fc5-b6c234768806.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588686/bakery/products/cakes/a0e63480-2baa-419e-95ed-1f98263f66ab.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,g_xy_center,h_204,w_420,y_1650/v1631588613/bakery/products/cakes/18f3c075-14ec-4f01-bc80-15257a979891.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588576/bakery/products/cakes/a1c3434f-66c8-4d30-9206-cb1026434f07.jpg",
    "https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,g_xy_center,h_204,w_420,y_1750/v1631588566/bakery/products/cakes/317a8e40-9279-403f-9a28-340cf10b6218.jpg",
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

export default CakesPages;
