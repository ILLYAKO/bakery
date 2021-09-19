import React from "react";

function CarouselHomePage() {
  return (
    <div
      id="carouselSlidesOnly"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/dxe2wwttx/image/upload/b_auto:predominant,c_pad,h_628,w_1296/v1631588587/bakery/products/cakes/a545a63b-f5ac-4f4b-8fc5-b6c234768806.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dxe2wwttx/image/upload/b_auto,c_pad,h_628,w_1296/v1631588587/bakery/products/cakes/a02e8d1b-2fbe-4183-8746-ebf92b09cddd.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dxe2wwttx/image/upload/b_auto:predominant,c_pad,h_628,w_1296/v1631588587/bakery/products/bread/b9d3997b-2329-4f13-af2d-5767eb392c55.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dxe2wwttx/image/upload/b_auto:predominant,c_pad,h_628,w_1296/v1631588587/bakery/products/pies/4d045060-1e69-42fc-bf33-940f9770d80f.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselHomePage;
