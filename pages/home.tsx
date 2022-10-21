import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardHeaders from "../components/card-header";
import BannersComponent from "../components/categories/banners";
import SearchFieldComponent from "../components/form-components/search-field-component";
import TwoLayerText from "../components/common/two-layer-text";
import CategorySelect from "../components/home-page-component/category-select";
import MostPopular from "../components/product/most-popular";
import ProductCard from "../components/product/product-card";
import TopSelling from "../components/product/top-selling";
import { getProducts } from "./api/products";
import ProductListingCard from "../components/products-description-and-type-components/product-listing-card";

interface Props {
  products?: any;
}

const Home: React.FC<Props> = ({ products }) => {
  const [search, setSearch] = useState("");

  console.log(products);
  return (
    <>
      <Box sx={{ p: "20px", mb: 10 }}>
        <TwoLayerText
          text1="Collection"
          fontSize="30px"
          marginBottomText1="12px"
        />

        <SearchFieldComponent
          placeholder="Search any brand, product"
          sx={{ width: "100%", marginBottom: "20px" }}
          searching
          value={search}
        />
        <CategorySelect marginBottom="20px" />
        {/* <CardHeaders text1="Top-Selling" /> */}
        <Grid container>
          {products.map((product: any, index: number) => (
            <Grid key={index} xs={6} md={4} lg={3}>
              <ProductListingCard key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
        {/* <TopSelling marginBottom="20px" />
        <CardHeaders text1="Most-Popular" />
        <MostPopular marginBottom="20px" /> */}
        {/* <CardHeaders text1="Budget Zone" /> */}
        {/* <BannersComponent
          marginBottom="120px"
          image="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Tops-Desktop2-19May2021.jpg"
        /> */}
      </Box>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
