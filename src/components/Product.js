import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const unVisibleButton = { visibility: "hidden" };
  return (
    <div className="col mt-5">
      <div
        className="card p-2"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link to={{ pathname: `/product-details/${product.id}`, product: product }}>
          <img src={product.images[0]} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <Link
            to={{ pathname: `/product-detail/${product.id}`, product: product }}
            style={{
              textDecoration: "none",
              fontSize: "0.7rem",
            }}
          >
            {product.title}
          </Link>
          <h4>${product.price.toFixed(2)}</h4>
          <p
            className="card-text"
            style={{ fontSize: "0.7rem", marginBottom: "3rem" }}
          >
            {product.description}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-primary "
              style={isHover ? null : unVisibleButton}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
