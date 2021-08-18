import React from "react";

function CarouselMainPage() {
  return (
    <div id="carouselSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={require("../../../assets/images/cookies.png").default.toString()}
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={require("../../../assets/images/cheesecake.png").default.toString()}
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={require("../../../assets/images/croissant.png").default.toString()}
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselMainPage;
