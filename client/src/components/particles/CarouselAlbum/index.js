import React from "react";

const CarouselAlbum = () => {
  return (
    <React.Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              src="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588587/bakery/products/cakes/a02e8d1b-2fbe-4183-8746-ebf92b09cddd.jpg"
              width="35px"
              height="20px"
              className="d-block"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img
              src="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588556/bakery/products/cakes/078a6b99-b183-4028-9637-972a172ac3a4.jpg"
              width="35px"
              height="20px"
              className="d-block"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img
              src="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588691/bakery/products/cakes/9ff79bb4-2fd4-46a8-8145-78e74a574ee6.jpg"
              width="35px"
              height="20px"
              className="d-block"
              alt="..."
            />
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588587/bakery/products/cakes/a02e8d1b-2fbe-4183-8746-ebf92b09cddd.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588556/bakery/products/cakes/078a6b99-b183-4028-9637-972a172ac3a4.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dxe2wwttx/image/upload/c_fill,h_204,w_420/v1631588691/bakery/products/cakes/9ff79bb4-2fd4-46a8-8145-78e74a574ee6.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CarouselAlbum;
