import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardHeaders from "../components/card-header";
import BannersComponent from "../components/categories/banners";
import SearchFieldComponent from "../components/common/search-field-component";
import TwoLayerText from "../components/common/two-layer-text";
import CategorySelect from "../components/home-page-component/category-select";
import MostPopular from "../components/product/most-popular";
import ProductCard from "../components/product/product-card";
import TopSelling from "../components/product/top-selling";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Box sx={{ p: "20px" }}>
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
        <CardHeaders text1="Top-Selling" />
        <TopSelling marginBottom="20px" />
        <CardHeaders text1="Most-Popular" />
        <MostPopular marginBottom="20px" />
        <CardHeaders text1="Budget Zone" />
        <BannersComponent
          marginBottom="120px"
          image="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Tops-Desktop2-19May2021.jpg"
        />
      </Box>
    </>
  );
};

export default Home;
