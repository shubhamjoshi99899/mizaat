import React from "react";
import ProductSinglePageCard from "../../components/products-description-and-type-components/product-single-page-card";
import TopBar from "../../components/products-description-and-type-components/top-bar";

interface Props {
  onClick?: any;
}
const Product: React.FC<Props> = ({ onClick }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <TopBar onClick={handleOpen} productPage />
      <ProductSinglePageCard
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default Product;
