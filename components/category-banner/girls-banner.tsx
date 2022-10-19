import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BannersComponent from "../categories/banners";
import Offer from "../offer/offer";

const GirlsBanner = () => {
  return (
    <>
      <BannersComponent
        image="/images/boy.jpg"
        bannerHeading="Online Executive"
      />
      <Offer image="/images/free-shipping.jpg" />
      <Box sx={{ px: 2, pt: 2 }}>
        <Typography fontSize="20px" fontWeight={700}>
          Summer Specials
        </Typography>
      </Box>

      <Grid container>
        <Grid xs={6}>
          <BannersComponent image="/images/sneaker.gif" />
        </Grid>
        <Grid xs={6}>
          <BannersComponent image="/images/boy-bottom.jpg" />
        </Grid>
      </Grid>
      <Offer marginBottom="20px" image="/images/free-shipping.jpg" />
      <Box sx={{ px: 3, pt: 2, overflow: "hidden" }}>
        <Typography fontSize="1.2 5rem" fontWeight={700} marginBottom="12px">
          Categories
        </Typography>
      </Box>
    </>
  );
};

export default GirlsBanner;
