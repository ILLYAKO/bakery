import React, { useState} from "react";
import { useHistory, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./style.css";

const ItemOfGallery = ({ id, title, img, price }) => {
  // eslint-disable-next-line
  const [inCart, setInCart] = useState(false);
  const history = useHistory();
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    history.push(`/product/details/${id}`);
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="img-container p-5" onClick={onSubmitHandler}>
          <Link to={`/product/details/${id}`}>
            <img
              className="bd-placeholder-img card-img-top w-100"
              src={img}
              alt={title}
            />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              console.log("added to cart");
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in Cart
              </p>
            ) : (
              <p className="text-capitalize mb-0" disabled>
                add
              </p>
            )}
          </button>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">{title}</p>
        <h5 className="text-blue font-italic mb-0">
          <span className="mr-1">$</span>{price}
        </h5>
      </div>
    </div>
  );
};

export default observer(ItemOfGallery);
