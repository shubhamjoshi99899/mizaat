import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardsFilterProducts from "../../components/products-description-and-type-components/cards-filter-products";
import ProductListingCard from "../../components/products-description-and-type-components/product-listing-card";
import TopBar from "../../components/products-description-and-type-components/top-bar";

const ProductListing = () => {
  return (
    <>
      <TopBar />
      <CardsFilterProducts />
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" marginBottom="20px">
          437 Products
        </Typography>
        <Grid container sx={{ mb: 10 }}>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>{" "}
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
          <Grid xs={6} md={4} lg={3}>
            <ProductListingCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductListing;
