import React from "react";
import CarouselAlbum from "../../CarouselAlbum";

const ItemOfAlbum = () => {
  return (
    <div class="col">
      <div
        class="card shadow-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          className="bd-placeholder-img card-img-tope w-100"
          src={require("../../../../assets/images/cookies.png").default.toString()}
          alt={"cookies"}
        />
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                ...
                <CarouselAlbum></CarouselAlbum>

              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOfAlbum;
