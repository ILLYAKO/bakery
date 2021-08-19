import React from "react";

function CarouselMainPage() {
  return (
    <div
      id="carouselSlidesOnly"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../../../assets/images/cookies.png").default.toString()}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={require("../../../assets/images/cheesecake.png").default.toString()}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={require("../../../assets/images/croissant.png").default.toString()}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselMainPage;
