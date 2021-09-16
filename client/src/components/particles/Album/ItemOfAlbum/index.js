import React from "react";
import CarouselAlbum from "../../CarouselAlbum";

const ItemOfAlbum = ({img}) => {
  return (
    <div className="col">
      <div
        className="card shadow-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          className="bd-placeholder-img card-img-tope w-100"
          // src={require("../../../../assets/images/cookies.png").default.toString()}
          src={img}
          alt={"cookies"}
        />
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                ...
                <CarouselAlbum></CarouselAlbum>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
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
