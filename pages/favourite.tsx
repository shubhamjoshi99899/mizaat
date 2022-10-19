import { Badge, Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TwoLayerText from "../components/common/two-layer-text";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchFieldComponent from "../components/form-components/search-field-component";
import ProductListingCard from "../components/products-description-and-type-components/product-listing-card";
import FavouriteProductCard from "../components/products-description-and-type-components/favourite-product-card";

const Favourite = () => {
  return (
    <>
      <Stack
        sx={{ p: 2 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <TwoLayerText text1="Favourites" fontSize="20px" />
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Stack>
      <Box mb={12}>
        <FavouriteProductCard />
        <FavouriteProductCard />
        <FavouriteProductCard />
      </Box>
    </>
  );
};

export default Favourite;
