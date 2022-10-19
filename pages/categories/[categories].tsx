import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import CardsFilterProducts from "../../components/products-description-and-type-components/cards-filter-products";
import ProductListingCard from "../../components/products-description-and-type-components/product-listing-card";
import TopBar from "../../components/products-description-and-type-components/top-bar";
import { getProducts } from "../api/products/index";
import { getProductsByCategory } from "../api/products/[category]";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
interface Props {
  products?: any;
  category?: any;
  subcategory?: any;
}

const ProductListing: NextPage<Props> = ({
  products,
  category,
  subcategory,
}) => {
  const router = useRouter();
  console.log(router.query.subcategory);
  const dispatch = useDispatch();
  return (
    <>
      <TopBar />
      <CardsFilterProducts />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" marginBottom="20px" fontWeight={700}>
          {products.length > 0
            ? `Showing ${products.length} Product`
            : `No result Found`}
        </Typography>
        <Box mb={6}>
          <ProductListingCard
            onClick={() => dispatch(addToCart(products))}
            data={products}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductListing;

export async function getServerSideProps(ctx: any) {
  const category = ctx.query.categories;
  const subcategory = ctx.query.subcategory;
  const products = await getProductsByCategory(category, subcategory);
  return { props: { products, subcategory } };
}
