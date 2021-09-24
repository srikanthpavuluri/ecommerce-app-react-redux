import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productsActions";

import Product from "./Product";

const ProductList = () => {
  const productState = useSelector((state) => state.products);
  const filteredBrands = useSelector((state) => state.filteredBrands);
  const dispatch = useDispatch();
  const layoutClassName = `row row-cols-1`;
  let products= productState.products;
 
  const color = { color: "#1E90FF" };
  useEffect(() => {
    dispatch(getProducts);
  }, []);
 
  return (
    <div style={{ width: "75%" }}>
      <div
        className="alert alert-secondary"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <div className={layoutClassName}>
            <>
              {products.map((product) => {
                return <Product product={product} />;
              })}
            </>
        </div>
      </div>
     
    </div>
  );
};

export default ProductList;
