import React from "react";
import ProductSinglePageCard from "../../components/products-description-and-type-components/product-single-page-card";
import TopBar from "../../components/products-description-and-type-components/top-bar";

const Product = () => {
  return (
    <>
      <TopBar productPage />
      <ProductSinglePageCard />
    </>
  );
};

export default Product;
