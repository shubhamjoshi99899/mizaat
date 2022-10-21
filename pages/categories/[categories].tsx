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

const ProductListing: NextPage<Props> = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Box sx={{ mb: 10 }}>
      <TopBar />
      <CardsFilterProducts />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" marginBottom="20px" fontWeight={700}>
          {products.length > 0
            ? `Showing ${products.length} Product`
            : `No result Found`}
        </Typography>
        <Box mb={6}>
          <Grid container>
            {products.map((product: any, index: number) => (
              <Grid key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                <ProductListingCard key={product.id} product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductListing;

export async function getServerSideProps(ctx: any) {
  const category = ctx.query.categories;
  const subcategory = ctx.query.subcategory;
  const products = await getProductsByCategory(category, subcategory);
  return { props: { products, subcategory } };
}
